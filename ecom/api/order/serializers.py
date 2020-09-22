from rest_framework import serializers
from .models import Order

class OrderSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = Order
        fields = ('id','user','product_name','total_products','transaction_id','total_amount','created_at','updated_at')
        #TODO  add product and quantity