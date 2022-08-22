import {Selector} from 'testcafe';

fixture('Fritzbox-Reboot').page(process.env.FRITZBOX_IP);

test('Reboot', async t => {
    await t
	.typeText(Selector('#uiPass'), process.env.FRITZBOX_PASSWORD)
        .click(Selector('#submitLoginBtn'))
        .click(Selector('a').withExactText("System"))
        .click(Selector('a').withExactText("Backup"))
        .click(Selector('a').withExactText("Restart"))
        .click(Selector('#btnReboot'))
	;
});
