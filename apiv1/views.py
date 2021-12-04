from rest_framework import viewsets, generics, status
from myappsite.models import Auth
from myappsite.serializers import AuthSerializer
from rest_framework.response import Response



class AuthLogin(generics.ListAPIView):
    queryset = Auth.objects.all()
    serializer_class = AuthSerializer
    
    def create(self, request):
        email = request.POST.get('email')
        password = request.POST.get('password')
        return Response({"email": email, "password": password}, status=status.HTTP_201_CREATED)


