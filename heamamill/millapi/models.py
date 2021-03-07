from django.db import models
from django.core.exceptions import ValidationError

# Validator function for duesFor field in Duse model


def only_int(value):
    if value.isdigit() == False:
        raise ValidationError('ID contains characters')

# Expenses & Profile/Product


class Mustard(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, default='Name Not Available')
    mobile = models.CharField(max_length=10, default='Not Available')
    quantity = models.DecimalField(max_digits=10, decimal_places=2)
    rate = models.DecimalField(max_digits=10, decimal_places=2)
    transport = models.DecimalField(
        max_digits=10, decimal_places=2, default=0.00)
    address = models.CharField(max_length=200, blank=True)
    desc = models.CharField(max_length=300, blank=True)

    def __str__(self):
        return self.name


class Container(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100)
    mobile = models.CharField(max_length=10, default='Not Available')
    rate = models.DecimalField(max_digits=10, decimal_places=2)
    transport = models.DecimalField(
        max_digits=10, decimal_places=2, default=0.00)
    quantity = models.IntegerField(default=0)
    # 5kg container, 10kg container, 15kg container, 15 kg recycle container
    containerType = models.CharField(max_length=20)
    address = models.CharField(
        max_length=200, blank=True, default='Not Available')
    desc = models.CharField(max_length=300, blank=True,
                            default='No Descriptions')

    def __str__(self):
        return self.containerType


class Employee(models.Model):
    joining = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=50)
    mobile = models.CharField(max_length=10, default='Not Available')
    photo = models.ImageField(upload_to="emp_photo/%Y/%m/%d/")
    identity = models.FileField(upload_to="emp_identity/%Y/%m/%d/")
    address = models.CharField(
        max_length=200, blank=True, default='Not Available')

    def __str__(self):
        return self.name


class EmpPayment(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(
        max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return self.amount


class OtherExpense(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(
        max_digits=10, decimal_places=2, default=0.00)
    # Electricity, Machinary, Jute Bags etc.
    expenseType = models.CharField(max_length=20)

    def __str__(self):
        return self.expenseType

    # Income


class Oil(models.Model):
    name = models.CharField(max_length=100, default='Name Not Available')
    date = models.DateTimeField(auto_now_add=True)
    mobile = models.CharField(max_length=10, default='Not Available')
    # 5kg container, 10kg container, 15kg container, 15 kg recycle container
    containerType = models.CharField(max_length=20)
    quantity = models.IntegerField(default=0)
    rate = models.DecimalField(max_digits=10, decimal_places=2)
    transport = models.DecimalField(
        max_digits=10, decimal_places=2, default=0.00)
    address = models.CharField(max_length=200, blank=True)
    desc = models.CharField(max_length=300, blank=True)

    def __str__(self):
        return self.name


class MustardCake(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, default='Name Not Available')
    mobile = models.CharField(max_length=10, default='Not Available')
    quantity = models.DecimalField(max_digits=10, decimal_places=2)
    rate = models.DecimalField(max_digits=10, decimal_places=2)
    transport = models.DecimalField(
        max_digits=10, decimal_places=2, default=0.00)
    address = models.CharField(max_length=200, blank=True)
    desc = models.CharField(max_length=300, blank=True)

    def __str__(self):
        return self.name


class Dues(models.Model):
    duesType = models.CharField(max_length=50)
    duesFor = models.CharField(max_length=20, validators=[only_int])
    name = models.CharField(max_length=100, default='Name Not Available')
    mobile = models.CharField(max_length=10, default='Not Available')
    date = models.DateTimeField(auto_now_add=True)
    total = models.DecimalField(
        max_digits=10, decimal_places=2, default=0.00)
    paid = models.DecimalField(
        max_digits=10, decimal_places=2, default=0.00)
    due = models.DecimalField(
        max_digits=10, decimal_places=2, default=0.00)
    isClear = models.BooleanField(default=False)
    desc = models.CharField(max_length=300, blank=True)

    def __str__(self):
        return self.total
