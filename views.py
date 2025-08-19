from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from core.models import EntityData, SearchHistory
from alerts.models import Alert
from .models import UserAlertPrefs

@login_required
def dashboard(request):
    history = SearchHistory.objects.filter(user=request.user).order_by('-search_date')[:10]
    alerts = Alert.objects.filter(user=request.user, is_read=False).order_by('-created_at')[:10]
    saved_entities = EntityData.objects.filter(searchhistory__user=request.user).distinct()[:10]  # Simplified for demo
    
    return render(request, 'dashboard/dashboard.html', {
        'history': history,
        'alerts': alerts,
        'saved_entities': saved_entities
    })

@login_required
def alert_preferences(request):
    try:
        prefs = request.user.useralertprefs
    except UserAlertPrefs.DoesNotExist:
        prefs = UserAlertPrefs.objects.create(user=request.user)
    
    if request.method == 'POST':
        prefs.price_alerts = request.POST.get('price_alerts') == 'on'
        prefs.deal_alerts = request.POST.get('deal_alerts') == 'on'
        prefs.review_alerts = request.POST.get('review_alerts') == 'on'
        prefs.alert_frequency = request.POST.get('alert_frequency', 'immediate')
        prefs.save()
        return redirect('dashboard')
    
    return render(request, 'dashboard/alert_prefs.html', {'prefs': prefs})

@login_required
def save_entity(request, entity_id):
    try:
        entity = EntityData.objects.get(id=entity_id)
        # Create a search history entry to "save" the entity
        SearchHistory.objects.create(user=request.user, entity=entity, notes="Saved entity")
        return JsonResponse({'success': True})
    except EntityData.DoesNotExist:
        return JsonResponse({'success': False, 'error': 'Entity not found'}, status=404)

@login_required
def remove_entity(request, entity_id):
    try:
        # Remove all search history entries for this entity and user
        SearchHistory.objects.filter(user=request.user, entity_id=entity_id).delete()
        return JsonResponse({'success': True})
    except:
        return JsonResponse({'success': False, 'error': 'Error removing entity'}, status=500)