from rest_framework import serializers
from .models import Auth, List, Task




class AuthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Auth
        fields = ('userId', 'token')


class ListSerializer(serializers.ModelSerializer):
    # 対象のフィールドのSerializerを置き換えると、ListSerializerを使って展開される
    # ManyToManyのように複数の場合は「many=True」をつける
    # contextを設定すると、URLの展開などをしてくれる
    # tasks = TaskSerializer() 


    # task_set = serializers.
    class Meta:
        model = List
        # fields = '__all__'
        fields = ('listId', 'name', 'created_at', 'tasks')
        depth = 1

class TaskSerializer(serializers.ModelSerializer):
    list = ListSerializer() 
    class Meta:
        model = Task
        fields = ('taskId', 'name', 'description','created_at', 'list')

