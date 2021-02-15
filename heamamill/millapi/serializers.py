from rest_framework import serializers
from millapi.models import Mustard, Container, Employee, EmpPayment, OtherExpense, Oil, MustardCake

# Mustard Serializer


class MustardSerializer (serializers.ModelSerializer):
    class Meta:
        model = Mustard
        fields = '__all__'

# Container Serializer


class ContainerSerializer (serializers.ModelSerializer):
    class Meta:
        model = Container
        fields = '__all__'

# Employee Serializer


class EmployeeSerializer (serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

# EmpPayment Serializer


class EmpPaymentSerializer (serializers.ModelSerializer):
    class Meta:
        model = EmpPayment
        fields = '__all__'

# OtherExpense Serializer


class OtherExpenseSerializer (serializers.ModelSerializer):
    class Meta:
        model = OtherExpense
        fields = '__all__'

# Oil Serializer


class OilSerializer (serializers.ModelSerializer):
    class Meta:
        model = Oil
        fields = '__all__'

# MustardCake Serializer


class MustardCakeSerializer (serializers.ModelSerializer):
    class Meta:
        model = MustardCake
        fields = '__all__'
