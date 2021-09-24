'use strict';

const {server} =require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server);

describe ('api server',()=>{
    let id;

    it('should get a 404 on a bad route',async ()=>{
        const response = await request.get('/notfound');
        expect(response.status).toBe(404);


    })

    it('should get a 404 on a bad method ',async ()=>{
        const response = await request.patch('/');
        expect(response.status).toBe(404);


    })

    it('should create a new food ',async ()=>{

        let food = {
            name:'ozi'
        }
        const response = await request.post("/api/v1/food").send(food);
        expect(response.body.data.name).toBe('ozi');
        expect(response.body.id.length).toBeGreaterThan(0);
        id=response.body.id

    })

    
    it('should update the food created earlier ',async ()=>{

        let food = {
            name:'mansaf'
        }
        const response = await request.put(`/api/v1/food/1/${id}`).send(food);
        expect(response.body.data.name).toBe('mansaf');
        expect(response.body.id.length).toBeGreaterThan(0);
        expect(response.body.id).toBe(id);
        

    })

    it('should read only the data with the id ',async ()=>{

        const response = await request.get(`/api/v1/food/1/${id}`);
        expect(response.body.data.name).toBe('mansaf');
        expect(response.body.id.length).toBeGreaterThan(0);
        expect(response.body.id).toBe(id);
        

    })

    it('should get all the data back',async ()=>{

        const response = await request.get(`/api/v1/food/`);
        expect(response.body[0].data.name).toBe('mansaf');
        expect(response.body[0].id.length).toBeGreaterThan(0);
        expect(response.body[0].id).toBe(id);
        

    })

    it('should delete the data with the id ',async ()=>{

        const response = await request.delete(`/api/v1/food/1/${id}`);
        expect(response.body.length).toBe(0);
        

    })

})