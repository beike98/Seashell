import {useEffect, useState} from 'react';
import createId from "../lib/createId";
import useUpdate from "./useUpdate";

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: "吃饭"},
        {id: createId(), name: "购物"},
        {id: createId(), name: "交通"},
        {id: createId(), name: "房租"},
        {id: createId(), name: "工资"},
      ];
    }
    setTags(localTags);
  }, [])

  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags])
  const addTag = () => {
    const tagName = window.prompt('新增标签名为：');
    if (tagName !== null && tagName !== '') {
      setTags([...tags, {id: createId(), name: tagName}])
    }
  };
  const findTag = (id: number) => {
    return tags.filter(tag => tag.id === id)[0]
  };
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, {name}:{name: string}) => {
    setTags(tags.map(tag => tag.id === id ? {id, name:name} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  return {tags, setTags, addTag, findTag, findTagIndex, updateTag, deleteTag};
};

export default useTags;