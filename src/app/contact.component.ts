import { Component } from '@angular/core';
import { FormControl, Validators, NgForm, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.css' ]
})

export class ContactComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.minLength(8),
  ]);
  public submitted = false;
  public buttonText = 'Wyślij';
  public value = '';
  public loggedIn = false;

  public onSubmit($event) {
    if (this.hasFormAnyError()) {
      // invalid
    } else {
      this.buttonText = 'Wysyłanie…';
      this.submitted = true;
      this.submitForm();
    }
  }

  public submitForm() {
    this.resetState();
  }

  public get buttonDisabled() {
    return this.submitted || this.hasFormAnyError();
  }

  private hasFormAnyError() {
    return this.emailFormControl.hasError('required')
      || this.emailFormControl.hasError('email')
      || this.emailFormControl.hasError('minlength');
  }

  private resetState() {
    setTimeout(() => {
      this.buttonText = 'Wyślij';
      this.submitted = false;
      this.loggedIn = true;
    }, 5000)
  }

//map
  title: string = 'Lokalizacja naszego klubu';
  lat: number = 51.113674;
  lng: number = 16.981875;
  zoom: number = 8;

  // clickedMarker(label: string, index: number) {
  //   console.log(`clicked the marker: ${label || index}`)
  // }

  // mapClicked($event: MouseEvent) {
  //   this.markers.push({
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng,
  //     draggable: true
  //   });
  // }

  // markerDragEnd(m: marker, $event: MouseEvent) {
  //   console.log('dragEnd', m, $event);
  // }

  markers: marker[] = [
	  {
		  lat: 51.113674,
		  lng: 16.981875,
		  label: 'A',
		  draggable: true
	  }
  ]

}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}