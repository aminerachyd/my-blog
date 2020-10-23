import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createEditor, Editor, Transforms, Text } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.bold === true,
      universal: true,
    });

    return !!match;
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "code",
    });

    return !!match;
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "code" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },
};

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

const Leaf = (props) => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}
    >
      {props.children}
    </span>
  );
};

const RichTextEditor = ({ changeBody }) => {
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

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <div className="border border-dark rounded p-4">
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          changeBody(newValue);
        }}
      >
        {/* <div>
          <button
            onMouseDown={(event) => {
              event.preventDefault();
              CustomEditor.toggleBoldMark(editor);
            }}
          >
            Bold
          </button>
          <button
            onMouseDown={(event) => {
              event.preventDefault();
              CustomEditor.toggleCodeBlock(editor);
            }}
          >
            Code Block
          </button>
        </div> */}
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          // Checking what key is pressed
          onKeyDown={(event) => {
            if (!event.ctrlKey) {
              return;
            }

            switch (event.key) {
              // ctrl+space to turn into code
              case " ": {
                event.preventDefault();
                CustomEditor.toggleCodeBlock(editor);
                break;
              }

              // ctrl+b to turn into bold
              case "b": {
                event.preventDefault();
                CustomEditor.toggleBoldMark(editor);
                break;
              }
            }
          }}
        />
      </Slate>
    </div>
  );
};

export default RichTextEditor;
