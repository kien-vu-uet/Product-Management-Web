from rest_framework import serializers
from .models import *

class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ('username', 'role')

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class WarehouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Warehouse
        fields = '__all__'

class FactorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Factory
        fields = '__all__'

class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = '__all__'

class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = '__all__'

class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = '__all__'

class WarrantyClaimSerializer(serializers.ModelSerializer):
    class Meta: 
        model = WarrantyClaim
        fields = '__all__'
        
class WarrantyCenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = WarrantyCenter
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Order
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class RecallClaimSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecallClaim
        fields = '__all__'

class BackClaimSerializer(serializers.ModelSerializer):
    class Meta:
        model = BackClaim
        fields = '__all__'

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = '__all__'