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
    print('■■■■■■■■■')
    def delete(self, request, pk, *args, **Kwargs):
        print('■■■■■■■■■')
        login = generics.get_object_or_404(Auth, pk=pk)
        login.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)


class GetListAPIView(views.APIView):
    def get(self, request, pk, *args, **Kwargs):
        return Response(status = status.HTTP_200_OK)

        
