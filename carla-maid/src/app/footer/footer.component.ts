import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {ChangeDetectionStrategy,} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {

}
