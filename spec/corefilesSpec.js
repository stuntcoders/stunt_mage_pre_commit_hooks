'use strict';

var hook = require('../pre-commit.d/corefiles');

describe('pre-commit corefiles tests', function() {

    it('shouldn\'t allow changes to Mage.php', function() {
        var editedFiles = [
            'app/Mage.php'
        ];

        expect(hook.isCoreFileEdited(editedFiles)).toBe(1);
    });

    it('shouldn\'t allow changes to core modules', function() {
        var editedFiles = [
            'app/code/core/Mage/Catalog/Model/Product.php'
        ];

        expect(hook.isCoreFileEdited(editedFiles)).toBe(1);
    });

    it('shouldn\'t allow changes to index.php', function() {
        expect(hook.isCoreFileEdited(['index.php'])).toBe(1);
        expect(hook.isCoreFileEdited(['custom/index.php'])).toBe(0);
    });

    it('shouldn\'t allow changes to core libraries', function() {
        expect(hook.isCoreFileEdited(['lib/Zend/Debug.php'])).toBe(1);
        expect(hook.isCoreFileEdited(['lib/Mage/Object.php'])).toBe(1);
        expect(hook.isCoreFileEdited(['lib/Varien/Object.php'])).toBe(1);
    });

    it('shouldn\'t allow changes to core theme', function() {
        expect(hook.isCoreFileEdited(['app/design/frontend/base/default/template/page/empty.phtml'])).toBe(1);
        expect(hook.isCoreFileEdited(['app/design/frontend/default/default/template/page/empty.phtml'])).toBe(1);
        expect(hook.isCoreFileEdited(['app/design/frontend/custom-package/default/template/page/empty.phtml'])).toBe(0);

        expect(hook.isCoreFileEdited(['app/design/adminhtml/default/default/template/login.phtml'])).toBe(1);
        expect(hook.isCoreFileEdited(['app/design/adminhtml/custom-package/default/template/login.phtml'])).toBe(0);
    });

    it('shouldn\'t allow changes to core skin files', function() {
        expect(hook.isCoreFileEdited(['skin/frontend/base/default/js/bundle.js'])).toBe(1);
        expect(hook.isCoreFileEdited(['skin/frontend/default/default/js/bundle.js'])).toBe(1);
        expect(hook.isCoreFileEdited(['skin/frontend/custom-package/default/js/bundle.js'])).toBe(0);

        expect(hook.isCoreFileEdited(['skin/adminhtml/default/default/menu.css'])).toBe(1);
        expect(hook.isCoreFileEdited(['skin/adminhtml/custom-package/default/menu.css'])).toBe(0);
    });

    it('shouldn\'t allow changes shell scripts', function() {
        expect(hook.isCoreFileEdited(['shell/abstract.php'])).toBe(1);
        expect(hook.isCoreFileEdited(['shell/compiler.php'])).toBe(1);
        expect(hook.isCoreFileEdited(['shell/indexer.php'])).toBe(1);
        expect(hook.isCoreFileEdited(['shell/log.php'])).toBe(1);
    });

    it('should accept local file changes', function() {
        var editedFiles = [
            'app/code/local/Stuntcoders/Catalog/Model/Product.php',
            'app/design/frontend/custom-package/default/template/page/empty.phtml',
            'js/scripts.js',
            'skin/frontend/custom-package/default/scss/styles.scss',
        ];

        expect(hook.isCoreFileEdited(editedFiles)).toBe(0);
    });
});
