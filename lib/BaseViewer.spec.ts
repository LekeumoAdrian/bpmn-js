import CommandStack from 'diagram-js/lib/command/CommandStack';

import BaseViewer from './BaseViewer';

const viewer = new BaseViewer({
  container: 'container'
});

viewer.importXML('<?xml version="1.0" encoding="UTF-8"?>', 'BPMNDiagram_1');

viewer.importXML('<?xml version="1.0" encoding="UTF-8"?>')
  .then(({ warnings }) => {
    console.log(warnings);
  })
  .catch(error => {
    const {
      message,
      warnings
    } = error;

    console.log(message, warnings);
  });

viewer.importDefinitions({ $type: 'bpmn:Definitions' }, 'BPMNDiagram_1');

viewer.importDefinitions({ $type: 'bpmn:Definitions' })
  .then(({ warnings }) => {
    console.log(warnings);
  })
  .catch(error => {
    const {
      message,
      warnings
    } = error;

    console.log(message, warnings);
  });

viewer.open('BPMNDiagram_1');

viewer.open({ $type: 'bpmn:BPMNDiagram' })
  .then(({ warnings }) => {
    console.log(warnings);
  })
  .catch(error => {
    const {
      message,
      warnings
    } = error;

    console.log(message, warnings);
  });

viewer.saveXML({ format: true, preamble: false })
  .then(({ xml, error }) => {
    if (error) {
      console.log(error);
    } else {
      console.log(xml);
    }
  })
  .catch(error => {
    console.log(error);
  });

viewer.getModules();

viewer.clear();

viewer.destroy();

viewer.get<CommandStack>('commandStack').undo();

viewer.invoke((commandStack: CommandStack) => commandStack.undo());

viewer.on('foo', () => console.log('foo'));

viewer.on([ 'foo', 'bar' ], () => console.log('foo'));

viewer.on('foo', 2000, () => console.log('foo'));

viewer.on('foo', 2000, () => console.log('foo'), { foo: 'bar' });

viewer.off('foo', () => console.log('foo'));

viewer.attachTo(document.createElement('div'));

viewer.getDefinitions();

viewer.detach();