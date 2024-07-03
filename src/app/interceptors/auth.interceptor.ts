import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { catchError, switchMap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const usuariosService = inject(UsuariosService);

  const token = usuariosService.getAuthToken();

  const authReq = req.clone({
    setHeaders: {
      Authorization: token
    }
  });

  return next(authReq).pipe(
    catchError((err) => {
      return usuariosService.refreshToken().pipe(
        switchMap((res) => {
          // Guardar el nuevo token
          localStorage.setItem('token', res.accessToken);

          const newReq = req.clone({
            setHeaders: {
              Authorization: res.accessToken
            }
          });

          return next(newReq);
        }),
        catchError((refreshErr) => {
          const finalError = new Error(refreshErr);

          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');

          return throwError(() => finalError);
        })
      )
    })
  );
};
