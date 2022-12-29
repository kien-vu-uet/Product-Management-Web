from django.db import models

# Create your models here.
class Customer(models.Model):
    # id = models.IntegerField(primary_key=True, auto_created=True) ## Primary Key
    name = models.CharField(max_length=50)
    contact = models.CharField(max_length=50)


class Category(models.Model):
    # id = models.IntegerField(primary_key=True, auto_created=True)
    name = models.CharField(max_length=50)
    warranty_period = models.IntegerField(default=1)

class Product(models.Model):
    # id = models.IntegerField(primary_key=True, auto_created=True) ## Primary Key
    name = models.CharField(max_length=50, default='Máy tính cầm tay')
    serial = models.CharField(max_length=50)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    manifactoring_date = models.DateTimeField(auto_now_add=True)
    price = models.FloatField(default=0)


class Factory(models.Model):
    # id = models.IntegerField(primary_key=True, auto_created=True) ## Primary Key
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    contact = models.CharField(max_length=50)

class Warehouse(models.Model):
    factory = models.ForeignKey(Factory, on_delete=models.CASCADE) ## Foreign Key
    product = models.ForeignKey(Product, on_delete=models.CASCADE) ## Foreign Key


class Store(models.Model):
    # id = models.IntegerField(primary_key=True, auto_created=True) ## Primary Key
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    contact = models.CharField(max_length=50)

class Stock(models.Model):
    store = models.ForeignKey(Store, on_delete=models.CASCADE) ## Foreign Key
    product = models.ForeignKey(Product, on_delete=models.CASCADE) ## Foreign Key


class Bill(models.Model):
    # id = models.IntegerField(primary_key=True, auto_created=True) ## Primary Key
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE) ## Foreign Key
    store = models.ForeignKey(Store, on_delete=models.CASCADE) ## Foreign Key
    purchase_date = models.DateTimeField(auto_now=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    status = models.CharField(max_length=50, default='Đã bán')


class WarrantyCenter(models.Model):
    # id = models.IntegerField(primary_key=True, auto_created=True) ## Primary Key
    location = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    contact = models.CharField(max_length=50)

class WarrantyClaim(models.Model):
    # id = models.IntegerField(primary_key=True, auto_created=True)
    center = models.ForeignKey(WarrantyCenter, on_delete=models.CASCADE) ## Foreign Key
    # product = models.ForeignKey(Product, on_delete=models.CASCADE) ## Foreign Key
    bill = models.ForeignKey(Bill, on_delete=models.CASCADE)
    warranty_init_date = models.DateTimeField(auto_now_add=True)
    warranty_end_date = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=50, default='Đang xử lý')

class Order(models.Model):
    # id = models.IntegerField(primary_key=True, auto_created=True)
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    factory = models.ForeignKey(Factory, on_delete=models.CASCADE)
    order_date = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=30, default='Đang xử lý')

class OrderDetail(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

class RecallClaim(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    serial = models.CharField(max_length=50, default='__all__')
    recall_date = models.DateTimeField(auto_now=True)
    reason = models.CharField(max_length=200, default='Sản phẩm lỗi')
    status = models.CharField(max_length=50, default='Đang xử lý')


class UserAccount(models.Model):
    username = models.CharField(max_length=50, primary_key=True) ## Primary Key
    password = models.CharField(max_length=50)
    role = models.CharField(max_length=30)
 