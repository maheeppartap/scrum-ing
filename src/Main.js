import ReactMarkdown from "react-markdown";

const Main = ({ activeNote, onUpdateNote }) => 
{
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value, 
            lastModified: Date.now(),
        })
    }

    if (!activeNote) return <div className="no-active-note">No note selected</div>
    return (
    <div className="app-main">
        <div className="app-main-note-edit">
            <input type="text" id="title" placeholder="What are you up to today?" value={activeNote.title} onChange={(e)=>onEditField("title", e.target.value)} autoFocus/>
            <input type="text" id="link" placeholder="GitHub Link? Tracker?" value={activeNote.link} onChange={(e)=>onEditField("link", e.target.value)} autoFocus/>
            <textarea id="body" placeholder="GitHub Tracker number or something else" value={activeNote.body} onChange={(e)=>onEditField("body", e.target.value)}/>
        </div>
        <div className="app-main-note-preview">
            <h1 className="preview-title">{activeNote.title}</h1>
            <ReactMarkdown className="markdown-preview" linkTarget="_blank">{activeNote.link}</ReactMarkdown>
            <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown>
        </div>
    </div>
    );
}


export default Main;