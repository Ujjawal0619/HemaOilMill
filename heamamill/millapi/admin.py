from django.contrib import admin
from .models import Mustard, Container, Employee, EmpPayment, OtherExpense, Oil, MustardCake, Dues

# Register your models here.


@admin.register(Mustard)
class MustardAdmin(admin.ModelAdmin):
    list_display = [f.name for f in Mustard._meta.get_fields()]


@admin.register(Container)
class ContainerAdmin(admin.ModelAdmin):
    list_display = [f.name for f in Container._meta.get_fields()]


@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = [f.name for f in Employee._meta.get_fields()]


@admin.register(EmpPayment)
class EmpPaymentAdmin(admin.ModelAdmin):
    list_display = [f.name for f in EmpPayment._meta.get_fields()]


@admin.register(OtherExpense)
class OtherExpenseAdmin(admin.ModelAdmin):
    list_display = [f.name for f in OtherExpense._meta.get_fields()]


@admin.register(Oil)
class OilAdmin(admin.ModelAdmin):
    list_display = [f.name for f in Oil._meta.get_fields()]


@admin.register(MustardCake)
class MustardCakeAdmin(admin.ModelAdmin):
    list_display = [f.name for f in MustardCake._meta.get_fields()]


@admin.register(Dues)
class DuesAdmin(admin.ModelAdmin):
    list_display = [f.name for f in Dues._meta.get_fields()]
