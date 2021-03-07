from .models import Mustard, Container, Employee, EmpPayment, OtherExpense, Oil, MustardCake, Dues
from rest_framework import viewsets, permissions
from .serializers import MustardSerializer, ContainerSerializer, EmployeeSerializer, EmpPaymentSerializer, OtherExpenseSerializer, OilSerializer, MustardCakeSerializer, DuesSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser

# Mustard Viewset


class MustardViewSet(viewsets.ModelViewSet):
    queryset = Mustard.objects.all()
    authentication_classes = [JWTAuthentication]
    permission_classes = [
        IsAuthenticated
    ]
    serializer_class = MustardSerializer

# Container Viewset


class ContainerViewSet(viewsets.ModelViewSet):
    queryset = Container.objects.all()
    authentication_classes = [JWTAuthentication]
    permission_classes = [
        IsAuthenticated
    ]
    serializer_class = ContainerSerializer

# Employee Viewset


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    authentication_classes = [JWTAuthentication]
    permission_classes = [
        IsAuthenticated
    ]
    serializer_class = EmployeeSerializer

# EmpPayment Viewset


class EmpPaymentViewSet(viewsets.ModelViewSet):
    queryset = EmpPayment.objects.all()
    authentication_classes = [JWTAuthentication]
    permission_classes = [
        IsAuthenticated
    ]
    serializer_class = EmpPaymentSerializer

# OtherExpense Viewset


class OtherExpenseViewSet(viewsets.ModelViewSet):
    queryset = OtherExpense.objects.all()
    authentication_classes = [JWTAuthentication]
    permission_classes = [
        IsAuthenticated
    ]
    serializer_class = OtherExpenseSerializer

# Oil Viewset


class OilViewSet(viewsets.ModelViewSet):
    queryset = Oil.objects.all()
    authentication_classes = [JWTAuthentication]
    permission_classes = [
        IsAuthenticated
    ]
    serializer_class = OilSerializer

# MustardCake Viewset


class MustardCakeViewSet(viewsets.ModelViewSet):
    queryset = MustardCake.objects.all()
    authentication_classes = [JWTAuthentication]
    permission_classes = [
        IsAuthenticated
    ]
    serializer_class = MustardCakeSerializer

# Dues Viewset


class DuesViewSet(viewsets.ModelViewSet):
    queryset = Dues.objects.all()
    permission_classes = [
        IsAuthenticated
    ]
    serializer_class = DuesSerializer
