from rest_framework import serializers
from .models import Auth, List




class AuthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Auth
        fields = ('userId', 'token')

class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = ('listId', 'name', 'items')
