import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import * as firebase from 'firebase'
import { connectData, connectData2, connectData3, connectData4, connectData5, connectData6, newPost } from '../../../components/FIrebase/firebaseConnect'
import { message, Row, Col, Card, Input, AutoComplete } from 'antd'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { EditorState, ContentState } from 'draft-js'
import { convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw } from 'draft-js';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const useStyles = makeStyles(styles);
const { Option } = Select;
const pageOptions = ["user", "post", "request", "chart/ECharts", "chart/highCharts", "pages6", "chart/Recharts"]
const content = { "entityMap": {}, "blocks": [{ "key": "637gr", "text": "Initialized from content state.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }] };
export default function WorkSection() {

  const [editorContent, setEditorContent] = useState({});
  const [htmlContent, setHtmlContent] = useState();
  const [title, setTitle] = useState();
  const [imageLink, setImageLink] = useState();
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [page, setPage] = useState();
  const [pageLink, setPageLink] = useState();
  const [pagePost, setPagePost] = useState();


  const update = (value) => {
    // value.on('value', (notes) => {
    //   var arrayData = []
    //   notes.forEach((element) => {
    //     const id = element.key
    //     const title = element.val().title
    //     const imageLink = element.val().imageLink
    //     const content = element.val().content
    //     const createAt = element.val().createAt
    //     arrayData.push({
    //       id: id,
    //       title: title,
    //       imageLink: imageLink,
    //       content: content,
    //       createAt: createAt,
    //       editorContent: content
    //     })
    //   })
    //   setData(arrayData)
    // })
    console.log("11111")
  }
  const onsuccess = () => {
    setEditorContent(null)
    setHtmlContent(null)
    setTitle(null)
    setImageLink(null)
    setData([])
    setDataFilter([])
  }

  useEffect(() => {
    update(page)
  }, []);

  // const onEditorStateChange = (editorContent) => {
  //   setEditorContent(editorContent);
  //   setHtmlContent(draftToHtml(convertToRaw(editorContent.getCurrentContent())));
  // }

  const onContentStateChange = (contentState) => {
    setEditorContent(editorContent);
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value)
  }

  const handleImageLinkChange = (e) => {
    setImageLink(e.target.value)
  }

  const handleCreate = () => {
    page.push({
      title: title,
      content: htmlContent,
      imageLink: imageLink,
      createAt: new Date().getTime(),
    })
    newPost.push({
      title: title,
      content: htmlContent,
      imageLink: imageLink,
      createAt: new Date().getTime(),
      pageLink: pageLink
    })
    // message.success(`Bạn đã đăng bài ${title} thành công !!!`)
    onsuccess()
  }

  const handleEdit = (id) => {
    page.child(id).set({
      title: title,
      content: htmlContent,
      imageLink: imageLink,
      createAt: dataFilter[0].createAt,
    })
    // message.success(`Bạn đã chỉnh sữa bài ${title} thành công !!!`)
    onsuccess()
  }

  const handleDelete = (id) => {
    page.child(id).remove();
    // message.success(`Bạn đã xóa bài ${dataFilter[0].title} thành công !!!`)
    onsuccess()
  }

  const onSelect = (value) => {
    const a = data.filter((item) => {
      return item.title === value.toString()
    })
    const content = ContentState.createFromText(a[0].content)
    setDataFilter(a)
    setTitle(a[0].title)
    setImageLink(a[0].imageLink)
    setEditorContent(EditorState.createWithContent(content))
  }

  const onChangePage = (index) => {
    const value = index.target.value
    const pageSelect = [connectData, connectData2, connectData3, connectData4, connectData5, connectData6, newPost]
    // onsuccess()
    setPage(pageSelect[value])
    setPageLink(pageOptions[index])
    // update(pageSelect[index])
    setPagePost(index)
  }

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Editor</h2>
          <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={pagePost}
                  onChange={onChangePage}
                >
                  {pageOptions.map((item, index) => <MenuItem value={index}>{item}</MenuItem>)}
                </Select>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <AutoComplete
                  style={{ width: "100%", marginTop: 10 }}
                  size="large"
                  placeholder="tile search"
                  options={data?.map((item) => {
                    return { ...item, value: item.title }
                  })}
                  onSelect={onSelect}
                // filterOption={(inputValue, option) =>
                //   option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                //   -1
                // }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
              <Editor
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                // value={dataFilter[0]?.content}
                // wrapperStyle={{
                //   overflow: "auto",
                //   height: "100vh",
                //   width: "100vw",
                //   zIndex: "10"
                // }}
                // editorStyle={{
                //   height: "85vh",
                //   width: "100vw",
                //   zIndex: "10"
                // }}
                // contentBlock={'contentState'}
                // editorState={editorContent}
                // initialContentState={editorContent}
                // onEditorStateChange={onEditorStateChange}
                // onContentStateChange={onContentStateChange}
              />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button color="success" onClick={handleCreate}>Create</Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button color="rose" onClick={handleDelete}>Delete</Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary" onClick={handleEdit}>Edit</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
