from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.

'''
Modelo de usuario personalido:
- El administrador de usuarios podrá crear usuarios y superusuarios si quiere, en este caso creará usuarios.
'''
class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        # Si no se registra un correo entonces mostrara un error.
        if not email: 
            raise ValueError('El usuario debe tener una direccion de correo electronico')
        
        email = self.normalize_email(email) #Normalizara el correo ej: JonatanFer@gmail.com a jonatanfer@gmail.com
        user = self.model(email=email, name=name)
        user.set_password(password) #Se crea una funcion para darle formato a la contraseña y no guardarla como formato de texto en la BD por seguridad.
        user.save()

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True) #unique: El correo se pide obligatoriamente.
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    # Para iniciar sesion tenemos que:
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name'] #Campos que voy a requerir, el "email" no lo coloco porque ya tiene el "unique=True"
    
    # Obtener el nombre largo y corto
    def get_full_name(self):
        return self.name    
    
    def get_short_name(self):
        return self.name 
    
    def __str__(self):
        return self.email