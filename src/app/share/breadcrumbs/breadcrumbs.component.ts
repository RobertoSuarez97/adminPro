import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ],
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;
  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.getRuta().subscribe(event => {
      // console.log(event);
      this.titulo = event.titulo;
      this.title.setTitle( this.titulo );

      const metaTag: MetaDefinition = {
        name: 'descripcion',
        content: this.titulo
      };

      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit(): void {
  }

  getRuta() {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map(((evento: ActivationEnd) => evento.snapshot.data))
    );
  }

}
