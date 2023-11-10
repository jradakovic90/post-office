Notes for developers:

- ne radi dobro add i update u backu za post office i za shipment, salje error iako je status 200.. kad bi to radilo ok success da vrati toast bi radio.ovako sa add,update mora da se refreshuje stranica
za apiurl sam ostavila komentar u api base service sta bih promenila.. poslala za post office slike.

- ne radi dobro add za shipment za getType and getWeight mora da se salju id a ne ceo objekat. Ili da saljem iz fronta id-jeve ili u backu da se promeni(poslala sam sliku)

- posto u packages koristimo shipments pa filtriramo onda prvi put kad su potrebni podaci shipments na pr onda bih kesirala podatke i ne bih opet zvala api u packages nego bih korisitla te podatke. oni bi bili up to date 
jer ako bi bila promena neka u shipments kesirani podaci bi bili updejtovani(tabela packages). Takodje offices se koriste i kada se kreira shipment ili edituje isto bih koristila kesirane podatke da ne zovem api
u tabelama ne treba da se vidi boolean kao true,false(delivered)..tu bih stavila condition u html sta da se vidi zavisno od boolean statusa(mozda neki mark)

- sto se tice package i filtera razmisljala sam o dve opcije. (filter metode su uradjene samo da urade filter, kod moze da se optimizuje)

Prva: svi ovi filteri trebalo bi da stoje u tabeli vezano za nazive kolona. posto sam ja napravila serovanu tabelu ili bi ona morala da se updejtuje ili ako bi bila previse "natrpana" onda moze tabela opet
serovana da se napravi za slucaj filtera.. uradila bih filtere isto kako sam vec u html uradila u package komponenti.samo bih ih stavila u ng-containeru vezano za matColumnDef..uradila bih to dinamicki i bilo bi potrebna
jos neki boolean u ColumnSettingsModel klasi po kojem bih znala da li treba da se prikaze input i neki ngIf koji ce biti jednak tom booleanu u html na input elementu. Ako treba da se kuca u search koristila bih input, za status na pr neki enum
 u dropdown-u itd...

Druga: da bude neki collapse panel gde bi bili svi searchovi(dropdown ako trazimo office(da se izlistaju sve)-isto za status i weight(to bi bili enumi jer im se vrednost ne menja))

-u kodu sam ostavila TODO neke notove dokle sam stigla s radom


# PostOffice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
