export  const dataFilterer = (
    filter: string,
    data: {
      data: {
        id: number;
        imageUrl: string;
        title: string;
        publishedAt: string;
        summary: string;
      }[];
      error: string;
    }
  ) => {
    const keyWordsArray = filter.split(" ");

    let filteredArr: {
      id: number;
      imageUrl: string;
      title: string;
      publishedAt: string;
      summary: string;
      keyWords: {
        title: string[];
        summary: string[];
      };
    }[] = [];
    data.data.forEach((element) => {
      const keyWords: {
        title: string[];
        summary: string[];
      } = {
        title: [],
        summary: [],
      };
      keyWordsArray.forEach((keyword: string) => {
        if (element.title.includes(keyword) && keyword !== "") {
          keyWords.title.push(keyword);
        }

        if (element.summary.includes(keyword) && keyword !== "") {
          keyWords.summary.push(keyword);
        }
      });
      if (filter) {
        if (keyWords.title.length > 0 || keyWords.summary.length > 0) {
          filteredArr.push({ ...element, keyWords: { ...keyWords } });
        }
      } else {
        filteredArr.push({ ...element, keyWords: { ...keyWords } });
      }
    });

    return filteredArr;
  };
