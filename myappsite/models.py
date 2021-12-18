import uuid
from django.db import models


class Auth(models.Model):
    """本モデル"""

    class Meta:
        db_table = 'auth'

    userId = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(verbose_name='email', max_length=20)
    password = models.CharField(verbose_name='password', max_length=20, null=True, blank=True)
    token = models.CharField(verbose_name='token', max_length=20, null=True, blank=True)

    def __str__(self):
        return self.email


class List(models.Model):
    """本モデル"""

    class Meta:
        db_table = 'list'

    listId = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(verbose_name='name', max_length=20, null=True, blank=True)
    items = models.TextField(verbose_name='items', null=True, blank=True)

    def __str__(self):
        return self.name
