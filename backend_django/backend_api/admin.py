from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Customer)
admin.site.register(Category)
# admin.site.register(Product)
# admin.site.register(Stock)
admin.site.register(Factory)
admin.site.register(Store)
# admin.site.register(StoreQuantity)
# admin.site.register(Order)
admin.site.register(WarrantyCenter)
# admin.site.register(WarrantyClaim)

admin.site.register(UserAccount)