from django.urls import path, include
from . import views

urlpatterns = [
    path('users/', views.get_all_accounts, name='get_users'),
    path('users/new/', views.add_account),
    path('users/<str:pk>/', views.update_account),

    path('sessions/', views.check_session),
    # path('sessions/new/', views.add_account),

    path('customers/', views.get_all_customers),
    path('customers/new/', views.add_customer),
    path('customers/<int:pk>/', views.update_customer),

    path('categories/', views.get_all_categories),
    path('categories/new/', views.add_category),
    path('categories/<int:pk>/', views.update_category),

    path('products/', views.get_all_products ),
    # path('products/new/', views.add_product),
    # path('products/news/', views.add_products),
    path('products/<int:pk>/', views.update_product ),

    path('factories/', views.get_all_factories),
    path('factories/new/', views.add_factory),
    path('factories/<int:pk>/', views.update_factory),

    path('stores/', views.get_all_stores),
    path('stores/new/', views.add_store),
    path('stores/<int:pk>/', views.update_store),

    path('warrantycenters/', views.get_all_warranty_centers),
    path('warrantycenters/new/', views.add_warranty_center),
    path('warrantycenters/<int:pk>/', views.update_warranty_center),

    path('warehouse/', views.get_all_warehousing),
    path('warehouse/news/', views.add_warehousing),
    path('warehouse/inventory/', views.get_all_quantity_in_factory),

    path('stock/', views.get_all_stocking),
    # path('stock/news/', views.add_new_stocking),
    path('stock/inventory/', views.get_all_quantity_in_store),

    path('warrantyclaims/', views.get_all_warranty_claims),
    path('warrantyclaims/new/', views.add_warranty_claim),
    path('warrantyclaims/<int:pk>/', views.update_warranty_claim),
    path('warrantyclaims/<int:pk>/back', views.move_product_back),

    path('bills/', views.get_all_bills),
    path('bills/new/', views.add_bill),
    path('bills/<int:pk>/', views.update_bill),
    path('bills/bystore/<int:pk>', views.get_bill_by_store),

    path('orders/', views.get_all_orders),
    path('orders/new/', views.add_order),
    path('orders/<int:pk>/', views.update_order),
    path('orders/<int:pk>/move/', views.order_move),

    path('recallclaims/', views.get_all_recall_claim),
    path('recallclaims/new/', views.add_recall_claim),
    path('recallclaims/<int:pk>/', views.get_recall_claim),


    path('backclaims/', views.get_all_back_claim),
    path('backclaims/new/', views.add_back_claim),
    path('backclaims/<int:pk>/', views.get_back_claim),

]