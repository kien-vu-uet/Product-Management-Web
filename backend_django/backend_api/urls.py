from django.urls import path, include
from . import views

urlpatterns = [
    # path('users/', views.get_all_accounts, name='get_users'),
    path('users/new/', views.add_account),
    path('users/<str:pk>/', views.update_account),

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
    path('warrantycenters/new/', views.add_warrantycenter),
    path('warrantycenters/<int:pk>/', views.update_warrantycenter),

    path('warehouse/', views.get_all_warehousing),
    path('warehouse/news/', views.add_warehousing),
    path('warehouse/export/', views.move_product)
]