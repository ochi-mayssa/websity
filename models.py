from django.db import models
from django.contrib.auth.models import User
from core.models import EntityData

class UserAlertPrefs(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    price_alerts = models.BooleanField(default=True)
    deal_alerts = models.BooleanField(default=True)
    review_alerts = models.BooleanField(default=False)
    alert_frequency = models.CharField(max_length=10, choices=[
        ('immediate', 'Immediately'),
        ('daily', 'Daily Digest'),
        ('weekly', 'Weekly Summary')
    ], default='immediate')