import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ],
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcription: Subscription;
  constructor() {
    this.subcription = this.regresaObservable().subscribe(
      numero => console.log('subs', numero),
      err => console.error('error en obs', err),
      () => console.log('Termino el observador')
      );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('La pagina se va a destruir');
    this.subcription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable( observer => {
      let contador = 0;
      const intervalo = setInterval(() => {
          contador += 1;

          const salida = {
            valor: contador
          };
          observer.next(salida);
          // if (contador === 3) {
          //   clearInterval(intervalo);
          //   observer.complete();
          // }
          // if (contador === 2) {
          //   // clearInterval(intervalo);
          //   observer.error('Auxiliooo!');
          // }
      }, 1000);
    }).pipe(
      // tslint:disable-next-line: no-string-literal
      map( resp => resp['valor']),
      filter((valor, index) => {
        if ((valor % 2) === 1) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

}
