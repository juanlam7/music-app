import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DATA_TEST_GETEPISODES } from '../../utils/data_mocks';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

import { EpisodesTableComponent } from './episodes-table.component';

describe('EpisodesTableComponent', () => {
  let component: EpisodesTableComponent;
  let fixture: ComponentFixture<EpisodesTableComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodesTableComponent],
      imports: [
        AngularMaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodesTableComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;

    component.episodesData = DATA_TEST_GETEPISODES.data;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit closeAction when btn-skip is clicked', () => {
    jest.spyOn(component.emitIdToParent, 'emit');

    const btnSkip = compiled.querySelectorAll('span');
    btnSkip[0]?.dispatchEvent(new Event('click'));

    expect(component.emitIdToParent.emit).toHaveBeenCalled();
  });
});
