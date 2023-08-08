///<reference types='Cypress'/>

describe('first scenario', () => {
    it('register', () => {
        cy.visit('https://hectorai.live/');
        cy.wait(4000);
        cy.get("[class='btn-box ml-4'] [href]").click();
        cy.get('.mb-3.f-w-400 > .ml-2').click();
        cy.get("[label='firstName']").type('bapan');
        cy.get("[label='lastName']").type('Pramanik');
        cy.get("[label='username']").type('sudipta12345');
        cy.get("[label='organization_Name']").type('abc learning');
        cy.get("[placeholder='1 \(702\) 123-4567']").type('7797570820');
        cy.get("[label='Email Address']").type('bapanpramanik342@gmail.com');
        cy.get("[label='Password']").type('12345Sudip##');
        cy.get("[label='Confirm Password']").type('12345Sudip##');
        cy.get(".btn").click();

    });
    it('Login', () => {
        cy.visit('https://hectorai.live/');
        cy.wait(4000);
        cy.get('section.land-panel header.main-header.home-3 div.outer-container div.container div.main-box.clearfix div.menu-area.pull-right.clearfix div.btn-box:nth-child(1) > a:nth-child(1)').click()
        cy.get("input[label='Email Address, Phone Number, Username']").type('bapanpramanik342@gmail.com');
        cy.get("[label='Password']").type('12345Sudip##');
        cy.get("[class='cr f-14 f-w-600 text-secondary']").click();
        cy.get('.col').click();
        cy.wait(10000);
        cy.get('.switch-container [xmlns]').click();
        cy.wait(5000);
        cy.get('.switch-container [xmlns]').click();
        cy.get('#dropdown-basic').click();
        cy.get('.themebg > .dropdown-item').click();
        cy.get('.swal2-confirm.swal2-styled').click();
    });
});