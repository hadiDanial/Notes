import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  /**
   * 
   * @param title 
   * @param timer 
   * @param position 'top', 'top-start', 'top-end' (default position), 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
   * @param icon 'success', 'error', 'info', 'warning', 'question'
   */
   alert(title: string, timer: number, toast: boolean, position: string = 'top-end', icon: string = 'success')
   {
     const options = {
       title: title,
       icon: icon,
       position: position,
       showConfirmButton: false,
       toast: toast,
       timer: timer
     } as SweetAlertOptions;
     
     swal.fire(options);
   }
 
   loadingMenu(message: string, obs: Observable<boolean>, successCallback: Function, failureCallback: Function)
   {
    const options = {
      text: message,

      showConfirmButton: false,
      allowOutsideClick: false,
      showCloseButton: false,
      onBeforeOpen: () =>
      {
        swal.showLoading()
        obs.subscribe(() =>
        {
          successCallback();
        },
          () =>
          {
            failureCallback();
          })
      }
      
    } as SweetAlertOptions;
     swal.fire(options);
   }
}
