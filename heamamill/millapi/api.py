from .models import Mustard, Container, Employee, EmpPayment, OtherExpense, Oil, MustardCake
from rest_framework import viewsets, permissions
from .serializers import MustardSerializer, ContainerSerializer, EmployeeSerializer, EmpPaymentSerializer, OtherExpenseSerializer, OilSerializer, MustardCakeSerializer

# Mustard Viewset


class MustardViewSet(viewsets.ModelViewSet):
    queryset = Mustard.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MustardSerializer

# Container Viewset


class ContainerViewSet(viewsets.ModelViewSet):
    queryset = Container.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ContainerSerializer

# Employee Viewset


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmployeeSerializer

# EmpPayment Viewset


class EmpPaymentViewSet(viewsets.ModelViewSet):
    queryset = EmpPayment.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmpPaymentSerializer

# OtherExpense Viewset


class OtherExpenseViewSet(viewsets.ModelViewSet):
    queryset = OtherExpense.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = OtherExpenseSerializer

# Oil Viewset


class OilViewSet(viewsets.ModelViewSet):
    queryset = Oil.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = OilSerializer

# MustardCake Viewset


class MustardCakeViewSet(viewsets.ModelViewSet):
    queryset = MustardCake.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MustardCakeSerializer
