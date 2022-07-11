from datetime import timedelta
from pathlib import Path

import psycopg2.extensions
from decouple import config

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = config('DEBUG', cast=bool)

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
	'django.contrib.admin',
	'django.contrib.auth',
	'django.contrib.contenttypes',
	'django.contrib.sessions',
	'django.contrib.messages',
	'django.contrib.staticfiles',
	'django.contrib.sitemaps',
	'django.contrib.sites',

	'account.apps.AccountConfig',
	'sinema.apps.SinemaConfig',
	'meta',

	'corsheaders',
	'rest_framework',
	'rest_framework_simplejwt',
	'rest_framework_simplejwt.token_blacklist',
	'drf_yasg',
	'django_filters',



	'django_cleanup.apps.CleanupConfig',
]

MIDDLEWARE = [
	'django.middleware.security.SecurityMiddleware',
	'django.contrib.sessions.middleware.SessionMiddleware',
	'corsheaders.middleware.CorsMiddleware',
	'django.middleware.common.CommonMiddleware',
	'django.middleware.csrf.CsrfViewMiddleware',
	'corsheaders.middleware.CorsPostCsrfMiddleware',
	'django.contrib.auth.middleware.AuthenticationMiddleware',
	'django.contrib.messages.middleware.MessageMiddleware',
	'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
	{
		'BACKEND': 'django.template.backends.django.DjangoTemplates',
		'DIRS': [BASE_DIR / 'templates'],
		'APP_DIRS': True,
		'OPTIONS': {
			'context_processors': [
				'django.template.context_processors.debug',
				'django.template.context_processors.request',
				'django.contrib.auth.context_processors.auth',
				'django.contrib.messages.context_processors.messages',
			],
		},
	},
]

WSGI_APPLICATION = 'config.wsgi.application'
ASGI_APPLICATION = 'config.asgi.application'


# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DB = config('DB')
if DB == 'sqlite3':
	DATABASES = {
		'default': {
			'ENGINE': 'django.db.backends.sqlite3',
			'NAME': BASE_DIR / 'db.sqlite3',
			'CONN_MAX_AGE': 20,

		},
	}
elif DB in ('mariadb', 'mysql'):
	DATABASES = {
		'default': {
			'ENGINE': 'django.db.backends.mysql',
			'USER': config('DB_USER'),
			'PASSWORD': config('DB_PASSWORD'),
			'NAME': config('DB_NAME'),
			'HOST': config('DB_HOST'),
			'PORT': config('DB_PORT'),
			'CONN_MAX_AGE': 20,
		
			'OPTIONS': {
				'charset': 'utf8mb4',

			},
		},
	}
elif DB == 'postgresql':
	DATABASES = {
		'default': {
			'ENGINE': 'django.db.backends.postgresql',
			'USER': config('DB_USER'),
			'PASSWORD': config('DB_PASSWORD'),
			'NAME': config('DB_NAME'),
			'HOST': config('DB_HOST'),
			'PORT': config('DB_PORT'),
			'CONN_MAX_AGE': 20,
		
			'OPTIONS': {
				'isolation_level': psycopg2.extensions.ISOLATION_LEVEL_SERIALIZABLE,
				'client_encoding': 'utf8',
			},
		},
		
	}



# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
	{
		'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
	},
]


# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = False

USE_TZ = False


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'static/'
STATICFIELS_DIRS = [
	BASE_DIR / 'assets/',
	]

MEDIA_URL = 'media/'
MEDIA_ROOT = BASE_DIR / 'media/'


# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'




AUTH_USER_MODEL = 'account.User'


EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
# EMAIL_HOST = config('EMAIL_HOST')
# EMAIL_USE_SSL = config('EMAIL_USE_SSL', cast=bool)
# EMAIL_PORT = config('EMAIL_PORT')
# EMAIL_HOST_USER = config('EMAIL_HOST_USER')
# EMAIL_HOST_PASSWORD = config('EMAIL_HOST_PASSWORD')
# DEFAULT_FROM_EMAIL = config('DEFAULT_FROM_EMAIL')

ADMINS = [
	# ('Admin', config('ADMINS'), )
]


REST_FRAMEWORK = {
	'DEFAULT_AUTHENTICATION_CLASSES': [
			'rest_framework.authentication.SessionAuthentication',
				'rest_framework.authentication.BasicAuthentication',
	],

	'DEFAULT_PERMISSION_CLASSES': [
		'meta.permissions.IsSafeOr404Forbidden',
	],

	'DEFAULT_FILTER_BACKENDS': [
		'rest_framework.filters.SearchFilter',
		'rest_framework.filters.OrderingFilter',
		'django_filters.rest_framework.DjangoFilterBackend',
	],

	'DEFAULT_PARSER_CLASSES': [
		'rest_framework.parsers.JSONParser',
		'rest_framework.parsers.MultiPartParser',
		'rest_framework.parsers.FileUploadParser',
		'rest_framework.parsers.FormParser',
	],

	'DEFAULT_RENDERER_CLASSES': [
		'rest_framework.renderers.JSONRenderer',
		'rest_framework.renderers.BrowsableAPIRenderer',
		'rest_framework_csv.renderers.CSVRenderer',
		'drf_excel.renderers.XLSXRenderer',
	],

	'DEFAULT_PAGINATION_CLASS': 'meta.pagination.StandardResultsSetPagination',
	'PAGE_SIZE': 100,


	'DEFAULT_METADATA_CLASS': 'meta.metadata.Metadata',

	# 'DEFAULT_THROTTLE_CLASSES': [
	# 	'rest_framework.throttling.AnonRateThrottle',
	# 	'rest_framework.throttling.UserRateThrottle'
	# ],
	# 'DEFAULT_THROTTLE_RATES': {
	# 	'anon': '500/day',
	# 	'user': '5000/day'
	# },

}


SIMPLE_JWT = {
	'ACCESS_TOKEN_LIFETIME': timedelta(days=1),
	'REFRESH_TOKEN_LIFETIME': timedelta(days=5),
	'ROTATE_REFRESH_TOKENS': True,
	'BLACKLIST_AFTER_ROTATION': True,
	'UPDATE_LAST_LOGIN': True,

	'ALGORITHM': 'HS256',
	'SIGNING_KEY': config('SIGNING_KEY'),
	'VERIFYING_KEY': None,
	'AUDIENCE': None,
	'ISSUER': None,
	'JWK_URL': None,
	'LEEWAY': 0,

	'AUTH_HEADER_TYPES': ('Bearer', 'Token', 'JWT', ),
	'AUTH_HEADER_NAME': 'HTTP_AUTHORIZATION',
	'USER_ID_FIELD': 'id',
	'USER_ID_CLAIM': 'user_id',
	'USER_AUTHENTICATION_RULE': 'rest_framework_simplejwt.authentication.default_user_authentication_rule',

	'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
	'TOKEN_TYPE_CLAIM': 'token_type',
	'TOKEN_USER_CLASS': 'rest_framework_simplejwt.models.TokenUser',

	'JTI_CLAIM': 'jti',

	'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
	'SLIDING_TOKEN_LIFETIME': timedelta(days=1),
	'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=5),
}



CORS_ALLOWED_ORIGINS = (

	'http://localhost:3000',
	'http://127.0.0.1:3000',

	'http://localhost:8000',
	'http://127.0.0.1:8000',

)

CSRF_TRUSTED_ORIGINS = (
	'http://localhost:3000',
	'http://127.0.0.1:3000',
	'http://localhost:8000',
	'http://127.0.0.1:8000',


	'http://localhost:3000',
	'http://127.0.0.1:3000',
	'http://localhost:8000',
	'http://127.0.0.1:8000',
)

CORS_ALLOW_HEADERS = '*'

CORS_ALLOW_ALL_ORIGINS = True
