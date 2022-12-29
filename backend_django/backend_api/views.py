from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.status import *

from .models import *
from .serializers import *


'''
For customer
'''
@api_view(['GET'])
def get_all_customers(request):
    acc = Customer.objects.all()
    serializer = CustomerSerializer(acc, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_customer(request):
    try:
        serializer = CustomerSerializer(data=request.data)
        if not serializer.is_valid():
            return Response('Failed', status=HTTP_400_BAD_REQUEST)
        customer = Customer.objects.create(
            name = serializer.data['name'],
            contact = serializer.data['contact']
        )
        customer.save()
        return Response(serializer.data, status=HTTP_201_CREATED)
    except:
        return Response('Invalid input', status=HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE', 'GET'])
def update_customer(request, pk):
    try:
        customer = Customer.objects.get(id=pk)
        if request.method == 'PUT':
            serializer = CustomerSerializer(customer, data=request.data)
            if not serializer.is_valid():
                return Response('Failed', status=HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response({'Updated': serializer.data}, status=HTTP_200_OK)
        elif request.method == 'DELETE':
            customer.delete()
            return Response('Deleted', status=HTTP_200_OK)
        elif request.method == 'GET':
            serializer = CustomerSerializer(customer, many=False)
            return Response(serializer.data, status=HTTP_200_OK)
    except:
        return Response('Invalid id', status=HTTP_400_BAD_REQUEST)



'''
For user account
'''
@api_view(['GET'])
def get_all_accounts(request):
    acc = UserAccount.objects.all()
    serializer = UserAccountSerializer(acc, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def add_account(request):
    try:
        serializer = UserAccountSerializer(data=request.data)
        if not serializer.is_valid():
            return Response('Failed', HTTP_400_BAD_REQUEST)
        account = UserAccount.objects.create(
            username=serializer.data['username'],
            password=serializer.data['password'],
            role=serializer.data['role']
        )
        account.save()
        return Response(serializer.data, HTTP_201_CREATED)
    except:
        return Response('Invalid input', HTTP_400_BAD_REQUEST)

@api_view(['POST', 'PUT', 'DELETE'])
def update_account(request, pk):
    try:
        account = UserAccount.objects.get(username=pk)
        if request.method=='POST':
            response = {
                "accepted" : False
            }
            data = request.data
            try: 
                if data['password'] == account.password:
                    response['accepted'] = True
                return Response(response, HTTP_200_OK)
            except:
                return Response('Required password', HTTP_400_BAD_REQUEST)

        elif request.method=='PUT':
            serializer = UserAccountSerializer(account, data=request.data)
            if not serializer.is_valid():
                return Response('Failed', status=HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data, HTTP_200_OK)
        elif request.method=='DELETE':
            account.delete()
            return Response('Deleted', HTTP_200_OK)
    except:
        return Response('Invalid id', HTTP_400_BAD_REQUEST)

    
'''
For category
'''
@api_view(['GET'])
def get_all_categories(request):
    response = []
    for category in Category.objects.all():
        products = Product.objects.filter(category=category)
        item = CategorySerializer(category, many=False).data
        item['quantity'] = products.__len__()
        response.append(item)
    return Response(response, HTTP_200_OK)


@api_view(['POST'])
def add_category(request):
    try:
        serializer = CategorySerializer(data=request.data)
        if not serializer.is_valid():
            return Response('Failed', status=HTTP_400_BAD_REQUEST)
        category = Category.objects.create(
            name = serializer.data['name'],
            warranty_period = serializer.data['warranty_period']
        )
        category.save()
        return Response(serializer.data, status=HTTP_201_CREATED)
    except:
        return Response("Invalid input", HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE', 'GET'])
def update_category(request, pk):
    try:
        category = Category.objects.get(id=pk)
        if request.method == 'PUT':
            serializer = CategorySerializer(category, data=request.data)
            if not serializer.is_valid():
                return Response('Failed', status=HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        elif request.method == 'DELETE':
            category.delete()
            return Response('Deleted', status=HTTP_200_OK)
        elif request.method == 'GET':
            serializer = CategorySerializer(category, many=False)
            response = serializer.data
            products = Product.objects.filter(category=category)
            response['quantity'] = products.__len__()
            return Response(response, status=HTTP_200_OK)
    except:
        return Response('Invalid id', status=HTTP_400_BAD_REQUEST)


'''
For product
'''
@api_view(['GET'])
def get_all_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data, HTTP_200_OK)

@api_view(['POST'])
def add_product(request):
    try:
        data = request.data
        category = Category.objects.get(id=data['category'])
        # data['category'] = category
        product = Product.objects.create(
            category=category,
            price=data['price']
        )
        serializer = ProductSerializer(product, many=False)
        return Response(serializer.data, HTTP_201_CREATED)
    except:
        return Response("Invalid input", HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def add_products(request):
    try:
        data = request.data
        category = Category.objects.get(id=data['category'])
        # data['category'] = category
        products = []
        for i in range(data['quantity']):
            product = Product.objects.create(
                category=category,
                price=data['price']
            )
            serializer = ProductSerializer(product, many=False)
            products.append(serializer.data)
        return Response(products, HTTP_201_CREATED)
    except:
        return Response("Invalid input", HTTP_400_BAD_REQUEST)

@api_view(['GET', 'DELETE'])
def update_product(request, pk):
    try:
        if request.method == 'GET':
            product = Product.objects.get(id=pk)
            serializer = ProductSerializer(product, many=False)
            return Response(serializer.data, HTTP_200_OK)
            '''
            ---------
            '''
        # elif request.method == 'DELETE':
        #     product = Product.objects.get(id=pk)
        #     product.delete()
        #     return Response('Deleted', HTTP_200_OK)
    except:
        return Response('Invalid id', status=HTTP_400_BAD_REQUEST)


'''
For factory
'''
@api_view(['GET'])
def get_all_factories(request):
    acc = Factory.objects.all()
    serializer = FactorySerializer(acc, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_factory(request):
    try:
        serializer = FactorySerializer(data=request.data)
        if not serializer.is_valid():
            return Response('Failed', status=HTTP_400_BAD_REQUEST)
        factory = Factory.objects.create(
            name = serializer.data['name'],
            location = serializer.data['location'],
            contact = serializer.data['contact']
        )
        factory.save()
        return Response(serializer.data, status=HTTP_201_CREATED)
    except:
        return Response('Invalid input', status=HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE', 'GET'])
def update_factory(request, pk):
    try:
        factory = Factory.objects.get(id=pk)
        if request.method == 'PUT':
            serializer = FactorySerializer(factory, data=request.data)
            if not serializer.is_valid():
                return Response('Failed', status=HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        elif request.method == 'DELETE':
            factory.delete()
            return Response('Deleted', status=HTTP_200_OK)
        elif request.method == 'GET':
            serializer = FactorySerializer(factory, many=False)
            return Response(serializer.data, status=HTTP_200_OK)
    except:
        return Response('Invalid id', status=HTTP_400_BAD_REQUEST)


'''
For store
'''
@api_view(['GET'])
def get_all_stores(request):
    acc = Store.objects.all()
    serializer = StoreSerializer(acc, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_store(request):
    try:
        serializer = StoreSerializer(data=request.data)
        if not serializer.is_valid():
            return Response('Failed', status=HTTP_400_BAD_REQUEST)
        store = Store.objects.create(
            name = serializer.data['name'],
            location = serializer.data['location'],
            contact = serializer.data['contact']
        )
        store.save()
        return Response(serializer.data, status=HTTP_201_CREATED)
    except:
        return Response('Invalid input', status=HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE', 'GET'])
def update_store(request, pk):
    try:
        store = Store.objects.get(id=pk)
        if request.method == 'PUT':
            serializer = StoreSerializer(store, data=request.data)
            if not serializer.is_valid():
                return Response('Failed', status=HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        elif request.method == 'DELETE':
            store.delete()
            return Response('Deleted', status=HTTP_200_OK)
        elif request.method == 'GET':
            serializer = StoreSerializer(store, many=False)
            return Response(serializer.data, status=HTTP_200_OK)
    except:
        return Response('Invalid id', status=HTTP_400_BAD_REQUEST)



'''
For warranty center
'''
@api_view(['GET'])
def get_all_warranty_centers(request):
    acc = WarrantyCenter.objects.all()
    serializer = WarrantyCenterSerializer(acc, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_warrantycenter(request):
    try:
        serializer = WarrantyCenterSerializer(data=request.data)
        if not serializer.is_valid():
            return Response('Failed', status=HTTP_400_BAD_REQUEST)
        warrantycenter = WarrantyCenter.objects.create(
            name = serializer.data['name'],
            location = serializer.data['location'],
            contact = serializer.data['contact']
        )
        warrantycenter.save()
        return Response(serializer.data, status=HTTP_201_CREATED)
    except:
        return Response('Invalid input', status=HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE', 'GET'])
def update_warrantycenter(request, pk):
    try:
        warrantycenter = WarrantyCenter.objects.get(id=pk)
        if request.method == 'PUT':
            serializer = WarrantyCenterSerializer(warrantycenter, data=request.data)
            if not serializer.is_valid():
                return Response('Failed', status=HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        elif request.method == 'DELETE':
            warrantycenter.delete()
            return Response('Deleted', status=HTTP_200_OK)
        elif request.method == 'GET':
            serializer = WarrantyCenterSerializer(warrantycenter, many=False)
            return Response(serializer.data, status=HTTP_200_OK)
    except:
        return Response('Invalid id', status=HTTP_400_BAD_REQUEST)


'''
For warehouse
'''
@api_view(['GET'])
def get_all_warehousing(request):
    warehousing = Warehouse.objects.all()
    serializer = WarehouseSerializer(warehousing, many=True)
    return Response(serializer.data, HTTP_200_OK)

@api_view(['POST'])
def add_warehousing(request):
    try:
        data = request.data
        factory = Factory.objects.get(id=data['factory'])
        category = Category.objects.get(id=data['product']['category'])
        warehousings = []
        for i in range(data['product']['quantity']):
            product = Product.objects.create(
                name=data['product']['name'],
                serial=data['product']['serial'],
                category=category,
                price=data['product']['price']
            )
            warehousing = Warehouse.objects.create(
                factory=factory,
                product=product
            )
            serializer = WarehouseSerializer(warehousing, many=False)
            warehousings.append(serializer.data)
        return Response(warehousings, HTTP_201_CREATED)
    except:
        return Response('Invalid input', HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def move_product(request):
    try:
        data = request.data

    except:
        return Response('Invalid input', HTTP_400_BAD_REQUEST)


'''
For stock
'''
@api_view(['GET'])
def get_all_stocking(request):
    stocking = Stock.objects.all()
    serializer = StockSerializer(stocking, many=True)
    return Response(serializer.data, HTTP_200_OK)

@api_view(['POST'])
def add_stocking(request):
    pass


'''
For bill
'''
@api_view(['GET'])
def get_all_bills(request):
    bills = Bill.objects.all()
    serializer = BillSerializer(bills, many=True)
    return Response(serializer.data, HTTP_200_OK)

@api_view(['POST'])
def add_bill(request):
    try:
        data = request.data
        store = Store.objects.get(id=data['store'])
        customer = Store.objects.get(id=data['customer'])
        product = Product.objects.get(id=data['product'])
        bill = Bill.objects.create(
            store=store,
            customer=customer,
            product=product
        )
        serializer = BillSerializer(bill, many=False)
        return Response(serializer.data, HTTP_201_CREATED)
    except:
        return Response('Invalid input', HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE', 'GET'])
def update_bill(request, pk):
    try:
        if request.method == 'DELELTE':
            bill = Bill.objcets.get(id=pk)
            bill.delete()
            return Response('Deleted', HTTP_200_OK)
        elif request.method == 'GET':
            bill = Bill.objects.get(id=pk)
            serializer = BillSerializer(bill, many=False)
            return Response(serializer.data, HTTP_200_OK)
        elif request.method == 'PUT':
            bill = Bill.objects.get(id=pk)
            bill.status = request.data['status']
            bill.save()
            serializer = BillSerializer(bill, many=False)
            return Response(serializer.data, HTTP_200_OK)
    except:
        return Response('Invalid id', HTTP_400_BAD_REQUEST)


'''
For warranty claim
'''
@api_view(['GET'])
def get_all_warranty_claims(request):
    claim = WarrantyClaim.objects.all()
    serializer = WarrantyClaimSerializer(claim, many=True)
    return Response(serializer.data, HTTP_200_OK)

@api_view(['POST'])
def add_warranty_claim(request):
    try:
        data = request.data
        center = WarrantyCenter.objects.get(id=data['warranty_center'])
        bill = Bill.objects.get(id=data['bill'])
        claim = WarrantyClaim.objects.create(
            center=center,
            bill=bill
        )
        serializer = WarrantyClaimSerializer(claim, many=False)
        return Response(serializer.data, HTTP_201_CREATED)
    except:
        return Response('Invalid input', HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE', 'GET'])
def update_claim(request, pk):
    try:
        if request.method == 'GET':
            claim = WarrantyClaim.objects.get(id=pk)
            serializer = WarrantyClaimSerializer(claim, many=False)
            return Response(serializer.data, HTTP_200_OK)
        elif request.method == 'DELETE':
            claim = WarrantyClaim.objects.get(id=pk)
            claim.delete()
            return Response('Deleted', HTTP_200_OK)
        elif request.method == 'PUT':
            claim = WarrantyClaim.objects.get(id=pk)
            claim.status = request.data['status']
            claim.save()
            serializer = WarrantyClaimSerializer(claim, many=False)
            return Response(serializer.data, HTTP_200_OK)
    except:
        return Response('Invalid id', HTTP_400_BAD_REQUEST)