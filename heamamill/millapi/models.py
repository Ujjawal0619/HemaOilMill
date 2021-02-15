from django.db import models

# Expenses & Profile/Product


class Mustard(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, default='Name Not Available')
    mobile = models.CharField(max_length=10, default='Not Available')
    quantity = models.DecimalField(max_digits=4, decimal_places=2)
    rate = models.DecimalField(max_digits=8, decimal_places=2)
    transport = models.DecimalField(
        max_digits=6, decimal_places=2, default=0.00)
    address = models.CharField(max_length=200, blank=True)
    desc = models.CharField(max_length=300, blank=True)


class Container(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100)
    mobile = models.CharField(max_length=10, default='Not Available')
    rate = models.DecimalField(max_digits=8, decimal_places=2)
    transport = models.DecimalField(
        max_digits=6, decimal_places=2, default=0.00)
    quantity = models.IntegerField(default=0)
    # 5kg container, 10kg container, 15kg container, 15 kg recycle container
    containerType = models.CharField(max_length=20)
    address = models.CharField(
        max_length=200, blank=True, default='Not Available')
    desc = models.CharField(max_length=300, blank=True,
                            default='No Descriptions')


class Employee(models.Model):
    # empPayment = models.ForeignKey(EmpPayment, on_delete=models.CASCADE)
    joining = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=50)
    mobile = models.CharField(max_length=10, default='Not Available')
    photo = models.ImageField(upload_to="emp_photo/%Y/%m/%d/")
    identity = models.FileField(upload_to="emp_identity/%Y/%m/%d/")
    address = models.CharField(
        max_length=200, blank=True, default='Not Available')


class EmpPayment(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(
        max_digits=6, decimal_places=2, default=0.00)


class OtherExpense(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(
        max_digits=6, decimal_places=2, default=0.00)
    # Electricity, Machinary, Jute Bags etc.
    expenseType = models.CharField(max_length=20)

    # Income


class Oil(models.Model):
    name = models.CharField(max_length=100, default='Name Not Available')
    date = models.DateTimeField(auto_now_add=True)
    mobile = models.CharField(max_length=10, default='Not Available')
    # 5kg container, 10kg container, 15kg container, 15 kg recycle container
    containerType = models.CharField(max_length=20)
    quantity = models.IntegerField(default=0)
    rate = models.DecimalField(max_digits=8, decimal_places=2)
    transport = models.DecimalField(
        max_digits=6, decimal_places=2, default=0.00)
    address = models.CharField(max_length=200, blank=True)
    desc = models.CharField(max_length=300, blank=True)


class MustardCake(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, default='Name Not Available')
    mobile = models.CharField(max_length=10, default='Not Available')
    quantity = models.DecimalField(max_digits=8, decimal_places=2)
    rate = models.DecimalField(max_digits=8, decimal_places=2)
    transport = models.DecimalField(
        max_digits=6, decimal_places=2, default=0.00)
    address = models.CharField(max_length=200, blank=True)
    desc = models.CharField(max_length=300, blank=True)
