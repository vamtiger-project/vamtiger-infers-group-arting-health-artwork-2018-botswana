import * as VBM from 'vamtiger-browser-method/build/types';
import { expect } from 'chai';

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;

export default () => describe('vamtiger-infers-group-arting-health-artwork-2018-botswana', function () {
    before(async function () {
        await loadScript({
            src: 'vamtiger-infers-group-arting-health-artwork-2018-botswana.js'
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector('[src="vamtiger-infers-group-arting-health-artwork-2018-botswana.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});