import requests
from bs4 import BeautifulSoup
from datetime import datetime, timedelta
import re
import time
import logging
from urllib.parse import quote_plus
from django.core.cache import cache
from django.conf import settings

logger = logging.getLogger(__name__)

def get_financial_modeling_prep_data(symbol):
    """Get financial data from Financial Modeling Prep API"""
    if not settings.FINANCIAL_MODELING_PREP_API_KEY:
        logger.error("Financial Modeling Prep API key not configured")
        return {}
    
    try:
        # Get company profile
        profile_url = f"https://financialmodelingprep.com/api/v3/profile/{symbol}?apikey={settings.FINANCIAL_MODELING_PREP_API_KEY}"
        profile_response = requests.get(profile_url, timeout=10)
        profile_data = profile_response.json()
        
        if not profile_data or 'Error Message' in profile_data:
            return {}
        
        profile = profile_data[0] if isinstance(profile_data, list) and len(profile_data) > 0 else {}
        
        # Get stock price
        quote_url = f"https://financialmodelingprep.com/api/v3/quote/{symbol}?apikey={settings.FINANCIAL_MODELING_PREP_API_KEY}"
        quote_response = requests.get(quote_url, timeout=10)
        quote_data = quote_response.json()
        
        quote = quote_data[0] if isinstance(quote_data, list) and len(quote_data) > 0 else {}
        
        # Get financial ratios
        ratios_url = f"https://financialmodelingprep.com/api/v3/ratios-ttm/{symbol}?apikey={settings.FINANCIAL_MODELING_PREP_API_KEY}"
        ratios_response = requests.get(ratios_url, timeout=10)
        ratios_data = ratios_response.json()
        
        ratios = ratios_data[0] if isinstance(ratios_data, list) and len(ratios_data) > 0 else {}
        
        # Format the data
        financials = {}
        
        if quote:
            financials.update({
                "current_price": quote.get('price'),
                "price_change": quote.get('change'),
                "price_change_percentage": quote.get('changesPercentage'),
                "day_high": quote.get('dayHigh'),
                "day_low": quote.get('dayLow'),
                "year_high": quote.get('yearHigh'),
                "year_low": quote.get('yearLow'),
                "volume": quote.get('volume'),
                "avg_volume": quote.get('avgVolume'),
                "market_cap": quote.get('marketCap'),
                "open": quote.get('open'),
                "previous_close": quote.get('previousClose'),
                "eps": quote.get('eps'),
                "pe_ratio": quote.get('pe'),
            })
        
        if profile:
            financials.update({
                "company_name": profile.get('companyName'),
                "currency": profile.get('currency'),
                "exchange": profile.get('exchange'),
                "industry": profile.get('industry'),
                "sector": profile.get('sector'),
                "description": profile.get('description'),
                "ceo": profile.get('ceo'),
                "website": profile.get('website'),
                "image": profile.get('image'),
            })
        
        if ratios:
            financials.update({
                "dividend_yield": ratios.get('dividendYielTTM'),
                "pe_ratio_ttm": ratios.get('peRatioTTM'),
                "peg_ratio": ratios.get('pegRatioTTM'),
                "payout_ratio": ratios.get('payoutRatioTTM'),
                "current_ratio": ratios.get('currentRatioTTM'),
                "quick_ratio": ratios.get('quickRatioTTM'),
                "gross_profit_margin": ratios.get('grossProfitMarginTTM'),
                "operating_profit_margin": ratios.get('operatingProfitMarginTTM'),
                "net_profit_margin": ratios.get('netProfitMarginTTM'),
                "return_on_assets": ratios.get('returnOnAssetsTTM'),
                "return_on_equity": ratios.get('returnOnEquityTTM'),
            })
        
        if financials:
            financials["source"] = "Financial Modeling Prep"
            financials["last_updated"] = datetime.now().isoformat()
        
        return financials
        
    except Exception as e:
        logger.error(f"Financial Modeling Prep API error for symbol {symbol}: {str(e)}")
        return {}

def get_finnhub_data(symbol):
    """Get financial data from Finnhub API"""
    if not settings.FINNHUB_API_KEY:
        logger.error("Finnhub API key not configured")
        return {}
    
    try:
        # Get quote data
        quote_url = f"https://finnhub.io/api/v1/quote?symbol={symbol}&token={settings.FINNHUB_API_KEY}"
        quote_response = requests.get(quote_url, timeout=10)
        quote_data = quote_response.json()
        
        if 'error' in quote_data:
            return {}
        
        # Get company profile
        profile_url = f"https://finnhub.io/api/v1/stock/profile2?symbol={symbol}&token={settings.FINNHUB_API_KEY}"
        profile_response = requests.get(profile_url, timeout=10)
        profile_data = profile_response.json()
        
        # Get company metrics
        metrics_url = f"https://finnhub.io/api/v1/stock/metric?symbol={symbol}&metric=all&token={settings.FINNHUB_API_KEY}"
        metrics_response = requests.get(metrics_url, timeout=10)
        metrics_data = metrics_response.json()
        
        # Format the data
        financials = {}
        
        if quote_data:
            financials.update({
                "current_price": quote_data.get('c'),
                "price_change": quote_data.get('d'),
                "price_change_percentage": quote_data.get('dp'),
                "day_high": quote_data.get('h'),
                "day_low": quote_data.get('l'),
                "open": quote_data.get('o'),
                "previous_close": quote_data.get('pc'),
            })
        
        if profile_data and 'name' in profile_data:
            financials.update({
                "company_name": profile_data.get('name'),
                "currency": profile_data.get('currency'),
                "exchange": profile_data.get('exchange'),
                "industry": profile_data.get('finnhubIndustry'),
                "website": profile_data.get('weburl'),
                "logo": profile_data.get('logo'),
            })
        
        if metrics_data and 'metric' in metrics_data:
            metrics = metrics_data['metric']
            financials.update({
                "market_cap": metrics.get('marketCapitalization'),
                "pe_ratio": metrics.get('peNormalizedAnnual'),
                "peg_ratio": metrics.get('pegRatio'),
                "dividend_yield": metrics.get('dividendYieldIndicatedAnnual'),
                "52_week_high": metrics.get('52WeekHigh'),
                "52_week_low": metrics.get('52WeekLow'),
                "eps": metrics.get('epsNormalizedAnnual'),
            })
        
        if financials:
            financials["source"] = "Finnhub"
            financials["last_updated"] = datetime.now().isoformat()
        
        return financials
        
    except Exception as e:
        logger.error(f"Finnhub API error for symbol {symbol}: {str(e)}")
        return {}

def get_yahoo_finance_data(symbol):
    """Get financial data from Yahoo Finance as a fallback"""
    try:
        url = f"https://finance.yahoo.com/quote/{symbol}"
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        response = requests.get(url, headers=headers, timeout=15)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extract price using multiple possible selectors
        price = None
        price_selectors = [
            'fin-streamer[data-field="regularMarketPrice"]',
            '[data-test="qsp-price"]',
            '.Fw\(b\).Fz\(36px\)',
            '[data-symbol="{symbol}"][data-field="regularMarketPrice"]'
        ]
        
        for selector in price_selectors:
            element = soup.select_one(selector)
            if element:
                price = element.get('value') or element.text.strip()
                if price:
                    break
        
        # Extract market cap
        market_cap = None
        market_cap_selectors = [
            '[data-test="MARKET_CAP-value"]',
            'td[data-test="MARKET_CAP-value"]',
            '[data-field="marketCap"]'
        ]
        
        for selector in market_cap_selectors:
            element = soup.select_one(selector)
            if element:
                market_cap = element.text.strip()
                if market_cap:
                    break
        
        # Extract other financial metrics
        metrics = {}
        metric_mappings = {
            'PREV_CLOSE-value': 'previous_close',
            'OPEN-value': 'open_price',
            'BID-value': 'bid',
            'ASK-value': 'ask',
            'DAYS_RANGE-value': 'day_range',
            'FIFTY_TWO_WK_RANGE-value': 'fifty_two_week_range',
            'VOLUME-value': 'volume',
            'AVG_VOLUME_3MONTH-value': 'avg_volume',
            'MARKET_CAP-value': 'market_cap',
            'BETA_5Y-value': 'beta',
            'PE_RATIO-value': 'pe_ratio',
            'EPS_RATIO-value': 'eps',
            'EARNINGS_DATE-value': 'earnings_date',
            'DIVIDEND_AND_YIELD-value': 'dividend_yield',
            'EX_DIVIDEND_DATE-value': 'ex_dividend_date',
            'ONE_YEAR_TARGET_PRICE-value': 'target_price'
        }
        
        for test_id, metric_name in metric_mappings.items():
            element = soup.find(attrs={"data-test": test_id})
            if element:
                metrics[metric_name] = element.text.strip()
        
        # If we got any data, return it
        if price or market_cap or metrics:
            result = {
                "current_price": price,
                "market_cap": market_cap,
                "source": "Yahoo Finance",
                "last_updated": datetime.now().isoformat()
            }
            result.update(metrics)
            return result
            
    except Exception as e:
        logger.error(f"Yahoo Finance error for symbol {symbol}: {str(e)}")
    
    return {}

def get_company_name_from_symbol(symbol):
    """Get company name from symbol using Financial Modeling Prep"""
    try:
        if settings.FINANCIAL_MODELING_PREP_API_KEY:
            url = f"https://financialmodelingprep.com/api/v3/profile/{symbol}?apikey={settings.FINANCIAL_MODELING_PREP_API_KEY}"
            response = requests.get(url, timeout=10)
            data = response.json()
            
            if data and isinstance(data, list) and len(data) > 0:
                return data[0].get('companyName', symbol)
        
        # Fallback to Yahoo Finance
        url = f"https://finance.yahoo.com/quote/{symbol}"
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        response = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Try to extract company name from title
        title = soup.find('title')
        if title:
            name = title.text.split('(')[0].strip()
            if name and name != 'Quote':
                return name
        
        # Try to extract from h1
        h1 = soup.find('h1', {'data-test': 'qsp-page-title'})
        if h1:
            name = h1.text.split('(')[0].strip()
            if name:
                return name
                
    except Exception as e:
        logger.error(f"Error getting company name for symbol {symbol}: {str(e)}")
    
    return symbol

def get_financial_data(symbol):
    """Main function to get financial data with multiple sources"""
    # Check cache first
    cache_key = f"financial_data_{symbol}"
    cached_data = cache.get(cache_key)
    if cached_data:
        return cached_data
    
    # Try Financial Modeling Prep first (most reliable)
    data = get_financial_modeling_prep_data(symbol)
    
    # If Financial Modeling Prep fails, try Finnhub
    if not data or all(v is None for k, v in data.items() if k not in ['source', 'last_updated']):
        data = get_finnhub_data(symbol)
    
    # If Finnhub fails, try Yahoo Finance as fallback
    if not data or all(v is None for k, v in data.items() if k not in ['source', 'last_updated']):
        data = get_yahoo_finance_data(symbol)
    
    # If we got data, add company name and cache it
    if data and (data.get('current_price') or data.get('market_cap')):
        if not data.get('company_name'):
            data['company_name'] = get_company_name_from_symbol(symbol)
        
        # Cache for 10 minutes to avoid rate limiting
        cache.set(cache_key, data, 600)
    
    return data

def scrape_google_news(entity_name):
    """Scrape Google News for the entity"""
    try:
        encoded_name = quote_plus(entity_name)
        news_url = f"https://news.google.com/rss/search?q={encoded_name}"
        response = requests.get(news_url, timeout=10)
        soup = BeautifulSoup(response.content, 'xml')
        
        deals = []
        for item in soup.find_all('item')[:5]:
            title = item.title.text if item.title else ""
            link = item.link.text if item.link else ""
            date = item.pubDate.text if item.pubDate else ""
            
            # Clean up the title
            title = re.sub(r' - [^-]+$', '', title)
            
            deals.append({
                "title": title,
                "link": link,
                "date": date,
                "source": "Google News"
            })
        return deals
    except Exception as e:
        logger.error(f"Google News scraping error: {str(e)}")
        return []

def scrape_reddit_opinions(entity_name):
    """Scrape Reddit for opinions about the entity"""
    try:
        encoded_name = quote_plus(entity_name)
        reddit_url = f"https://www.reddit.com/search.json?q={encoded_name}&limit=8"
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        response = requests.get(reddit_url, headers=headers, timeout=10)
        data = response.json()
        
        opinions = []
        posts = data.get('data', {}).get('children', [])
        
        for post in posts:
            post_data = post.get('data', {})
            title = post_data.get('title', '')
            # Skip if it's just a stock symbol
            if len(title.split()) <= 2 and any(char.isdigit() for char in title):
                continue
                
            opinions.append({
                "source": "Reddit",
                "text": title,
                "score": post_data.get('score', 0),
                "url": f"https://reddit.com{post_data.get('permalink', '')}",
                "date": datetime.fromtimestamp(post_data.get('created_utc', 0)).strftime('%Y-%m-%d'),
                "subreddit": post_data.get('subreddit', '')
            })
        return opinions
    except Exception as e:
        logger.error(f"Reddit scraping error: {str(e)}")
        return []

def find_symbol_for_company(company_name):
    """Try to find stock symbol for a company name using Financial Modeling Prep"""
    try:
        if settings.FINANCIAL_MODELING_PREP_API_KEY:
            search_url = f"https://financialmodelingprep.com/api/v3/search?query={quote_plus(company_name)}&limit=5&apikey={settings.FINANCIAL_MODELING_PREP_API_KEY}"
            response = requests.get(search_url, timeout=10)
            data = response.json()
            
            if data and isinstance(data, list) and len(data) > 0:
                return data[0].get('symbol')
        
        # Fallback to Yahoo Finance search
        search_url = f"https://finance.yahoo.com/lookup?s={quote_plus(company_name)}"
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        response = requests.get(search_url, headers=headers, timeout=10)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Look for the first result
        first_result = soup.find('tr', {'class': 'react-data-row'})
        if first_result:
            symbol_cell = first_result.find('td', {'aria-label': 'Symbol'})
            if symbol_cell:
                return symbol_cell.text.strip()
    
    except Exception as e:
        logger.error(f"Error finding symbol for company {company_name}: {str(e)}")
    
    return None

def scrape_entity_info(entity_name, entity_type):
    """Main function to scrape information about an entity"""
    data = {
        "name": entity_name,
        "type": entity_type,
        "financials": {},
        "deals": [],
        "opinions": [],
        "last_updated": datetime.now().isoformat(),
        "sources": []
    }
    
    # Get financial data for companies
    if entity_type == "company":
        # Check if it looks like a stock symbol
        if (entity_name.isupper() and 
            len(entity_name) <= 5 and 
            not any(c in entity_name for c in ' ./-')):
            
            financial_data = get_financial_data(entity_name)
            if financial_data:
                data["financials"] = financial_data
                data["sources"].append(financial_data.get("source", "Financial Data"))
                
                # Use the discovered company name if available
                if financial_data.get('company_name'):
                    data["name"] = financial_data['company_name']
        else:
            # Search for the symbol based on company name
            symbol = find_symbol_for_company(entity_name)
            if symbol:
                financial_data = get_financial_data(symbol)
                if financial_data:
                    data["financials"] = financial_data
                    data["sources"].append(financial_data.get("source", "Financial Data"))
    
    # Get news/deals
    news_data = scrape_google_news(data["name"])
    if news_data:
        data["deals"] = news_data
        data["sources"].append("Google News")
    
    # Get opinions
    opinion_data = scrape_reddit_opinions(data["name"])
    if opinion_data:
        data["opinions"] = opinion_data
        data["sources"].append("Reddit")
    
    return data