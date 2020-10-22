import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createEditor, Editor, Transforms } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const RichTextEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ]);

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const DefaultElement = (props) => {
    return <pre {...props.attributes}>{props.children}</pre>;
  };

  const CodeElement = (props) => {
    return (
      <pre {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    );
  };

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <Editable
        renderElement={renderElement}
        // Checking what key is pressed
        onKeyDown={(event) => {
          if (event.key === "`" && event.ctrlKey) {
            event.preventDefault();
            const [match] = Editor.nodes(editor, {
              match: (n) => n.type === "code",
            });
            Transforms.setNodes(
              editor,
              { type: match ? "paragraph" : "code" },
              { match: (n) => Editor.isBlock(editor, n) }
            );
          }
        }}
      />
    </Slate>
  );
};

export default RichTextEditor;
