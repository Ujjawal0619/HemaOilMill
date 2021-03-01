from rest_framework import routers
from .api import MustardViewSet, ContainerViewSet, EmployeeViewSet, EmpPaymentViewSet, OtherExpenseViewSet, OilViewSet, MustardCakeViewSet

router = routers.DefaultRouter()
router.register('api/mustard', MustardViewSet, 'mustard')
router.register('api/containers', ContainerViewSet, 'containers')
router.register('api/employees', EmployeeViewSet, 'employees')
router.register('api/payments', EmpPaymentViewSet, 'payments')
router.register('api/other', OtherExpenseViewSet, 'other')
router.register('api/oil', OilViewSet, 'oil')
router.register('api/cake', MustardCakeViewSet, 'cake')
router.register('api/dues', MustardCakeViewSet, 'dues')

urlpatterns = router.urls
