<template>
    <div>{{home}}</div>

    <div>{{db}}</div>
</template>

<script>
import mongodb from 'mongodb';

export default {
  components: {},
  data() {
    return {
      home: 'Welcome back to Home!',
      db: '',
    };
  },
  methods: {},

  beforeMount() {
    const MongoClient = mongodb.MongoClient;

    const uri = 'mongodb+srv://neosoong:qazQAZ_1@app1-mprw6.mongodb.net/test';
    MongoClient.connect(uri, (err, db) => {
      const val = db.getCollection('mock_data').find({});
      this.db = val[0].name;
      db.close();
    });
  },
};
</script>

<style lang='scss'>
@import "../styles/bootstrap-functions.scss";
</style>
