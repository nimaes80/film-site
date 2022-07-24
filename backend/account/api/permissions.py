from rest_framework.permissions import SAFE_METHODS, BasePermission



class UserPermissions(BasePermission):



	def has_permission(self, request, view):
		return bool(
			(view.action in ['create', 'activation']) or
			(request.user and request.user.is_authenticated and request.user.is_superuser)
		)


	def has_object_permission(self, request, view, obj):
		return bool(
			request.user and request.user.is_authenticated and (
				request.user.is_superuser or
				(obj == request.user and request.method != 'DELETE')
			)
		)
	
