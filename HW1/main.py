import logging
import django
import os

# 確保 Django 正確啟動
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "myproject.settings")
django.setup()

logger = logging.getLogger('django')
logger.debug("這是一條來自 main.py 的 DEBUG 訊息")
logger.info("這是一條 INFO 訊息")
logger.error("這是一條 ERROR 訊息")

print("已記錄日誌，請檢查 debug.log")
