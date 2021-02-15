from rest_framework import routers
from .api import MustardViewSet, ContainerViewSet, EmployeeViewSet, EmpPaymentViewSet, OtherExpenseViewSet, OilViewSet, MustardCakeViewSet

router = routers.DefaultRouter()
router.register('api/mustard', MustardViewSet, 'mustard')
router.register('api/container', ContainerViewSet, 'container')
router.register('api/employee', EmployeeViewSet, 'employee')
router.register('api/emppayment', EmpPaymentViewSet, 'emppayment')
router.register('api/otherexpense', OtherExpenseViewSet, 'otherexpense')
router.register('api/oil', OilViewSet, 'oil')
router.register('api/mustardcake', MustardCakeViewSet, 'mustardcake')

urlpatterns = router.urls
