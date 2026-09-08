import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampoPesquisa } from './campo-pesquisa';

describe('CampoPesquisa', () => {
  let component: CampoPesquisa;
  let fixture: ComponentFixture<CampoPesquisa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoPesquisa],
    }).compileComponents();

    fixture = TestBed.createComponent(CampoPesquisa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
