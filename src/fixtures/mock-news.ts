export class MockNews {
    public mockData:any[];
 
 getMockData(mockData):any{
  this.mockData = mockData;
  return this.mockData = [
    {
      "img":"assets/img/post1-img.jpg",
      "title":"Lorem ipsum dolor sit amet.",
      "date":"16/08/2018",
      "txt":"Phasellus vel odio quis ex convallis faucibus vitae in augue. Donec id nibh sed enim tincidunt elementum, finibus quis erat id, mattis ornare tellus."
    },
    {
      "img":"assets/img/post4-img.jpg",
      "title":"Etiam tortor eros, finibus quis.",
      "date":"10/08/2018",
      "txt":"Maecenas varius efficitur eros. Etiam tortor eros, finibus quis erat id, mattis ornare tellus. Ut gravida tristique semper. Consequat integer vehicula."
    },
    {
      "img":"assets/img/post3-img.jpg",
      "title":"Etiam tortor eros, finibus quis.",
      "date":"25/07/2018",
      "txt":"Etiam tortor eros, finibus quis erat id, mattis ornare tellus. Maecenas varius efficitur eros. Ut gravida tristique semper. Integer mattis justo sed."
    },
    {
      "img":"assets/img/post2-img.jpg",
      "title":"Etiam tortor eros, finibus quis.",
      "date":"10/07/2018",
      "txt":"Etiam tortor eros, finibus quis erat id, mattis ornare tellus. Maecenas varius efficitur eros. Ut gravida tristique semper. Integer mattis justo sed."
    },
    {
      "img":"assets/img/post5-img.jpg",
      "title":"Etiam tortor eros, finibus quis.",
      "date":"02/07/2018",
      "txt":"Etiam tortor eros, finibus quis erat id, mattis ornare tellus. Maecenas varius efficitur eros. Ut gravida tristique semper. Integer mattis justo sed."
    },
    {
      "img":"assets/img/post6-img.jpg",
      "title":"Etiam tortor eros, finibus quis.",
      "date":"29/06/2018",
      "txt":"Etiam tortor eros, finibus quis erat id, mattis ornare tellus. Maecenas varius efficitur eros. Ut gravida tristique semper. Integer mattis justo sed."
    }
  ]
 }

}
