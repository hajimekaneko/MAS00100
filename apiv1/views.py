from os import strerror
from rest_framework import fields, viewsets, generics, status, views
from rest_framework.exceptions import ValidationError
from rest_framework.serializers import Serializer
from myappsite.models import Auth
from myappsite.serializers import AuthSerializer
from rest_framework.response import Response
from django_filters import rest_framework as filters

# class AuthLogin(viewsets.ModelViewSet):
#     queryset = Auth.objects.all()
#     serializer = AuthSerializer(queryset, many=True)

# タスクリストID
nextTaskListId = 0
# タスクID
nextTaskId = 0

# タスクリストIDを生成するヘルパー関数
def generateTaskListId():
    global nextTaskListId
    nextTaskListId+=1
    return nextTaskListId

# タスクIDを生成するヘルパー関数
def generateTaskId():
    global nextTaskId
    nextTaskId +=1
    return nextTaskId

# タスクを作成をするヘルパー関数
def createTask(listId):
    task={
        "id": generateTaskId(),
        "name":"タスク" + str(nextTaskId),
        "description":"これはタスク" +str(nextTaskId) + "です",
        "listId":listId
    }
    return(task)


# タスクリストを作成するヘルパー関数
def createTaskList(name, num):
    id = generateTaskListId()
    list = {
        "id": id,
        "name": name,
        "items": []
    }
    for i in range(num):
        list["items"].append(createTask(id))
    return list

# ボード情報
board = {
    "lists": [
      createTaskList('TODO', 2),
      createTaskList('WIP', 1),
      createTaskList('DONE', 1)
    ]
  }

print("{}".format(board))


class Authfilter(filters.FilterSet):
    class Meta:
        model = Auth
        fields = '__all__'

class AuthLoginAPIView(views.APIView):
    def post(self, request, *args, **Kwargs):
        print('■■■■■■■■■')
        print(request.data["email"])
        print(request.data["password"])
        print(request.query_params)

        filterset = Authfilter(request.query_params, queryset = Auth.objects.all())
        # if not filterset.is_vaild():
        #     raise ValidationError(filterset.errors)
        serializer = AuthSerializer(instance=filterset.qs, many=True)
        print('■■■■■■■■■')
        print(serializer.data)
        return Response(serializer.data, status.HTTP_200_OK)

class AuthLogoutAPIView(views.APIView):
    print('■■■■■■■■■query_params')
    def delete(self, request,*args, **Kwargs):
        print(request.query_params)
        print('■■■■■■■■■')
        login = generics.get_object_or_404(Auth, pk="")
        login.delete()
        print('■■■■■■■■■delete')
        return Response(status = status.HTTP_204_NO_CONTENT)


class GetListAPIView(views.APIView):
    def get(self, request, *args, **Kwargs):
        # ボード情報
        board = {
            "lists": [
            createTaskList('TODO', 2),
            createTaskList('WIP', 1),
            createTaskList('DONE', 1)
            ]
  }

        return Response(board["lists"], status = status.HTTP_200_OK)

        
