/**
 * 本地存储的构造函数
 */
    function StorageChange() {
        /**
         * 从本地存储里查询数据
         * @param { String } key 查询本地存储的Key值
         * @returns { Array } 数据原本的（数组）对象
        */
        this.searchStorageData = function(key) {
            // 从 localStorage 里获取数据
            let data = localStorage.getItem(key);
    
            // data 为null时，也就是该key值一开始没有存储数据时，数组应为[]
            let arr = JSON.parse(data) || [];
            // 存储的每条数据的标识符
            return arr;
        },

         /**
         * 获取本地存储数据里，最大的标识符
         * @param { String } key 查询本地存储的Key值
         * @returns { Number } 数据中的最大标识符
        */
         this.getMaxId = function(key) {

            let arr = this.searchStorageData(key);
            let id = 0;
            arr.forEach(function(e) {
                if(e.id > id) {
                    id = e.id;
                }
            });
            return id;
        },

       
        /**
         * 添加数据
         * @param { String } key 查询本地存储的Key值
         * @param { String } content 添加新的内容
         * @returns { undefined } 
        */
         this.addData = function(key, content) {
            // 获取最大id
            let newId = this.getMaxId(key);
            newId++;
            // 存储到obj，并添加到arr中
            let obj = {
                id: newId,
                content: content
            };
            // 获取当前的arr
            let arr = this.searchStorageData(key);
            // 添加
            arr.push(obj);
            // 存储到localStore
            localStorage.setItem(key, JSON.stringify(arr));
        },

        /**
         * 数据删除
         * @param { String } key 查询本地存储的Key值
         * @param { String } eleId 被删除元素对应的id
         * @returns { undefined } 
        */
         this.delData = function(key, eleId) {
            let arr = this.searchStorageData(key);

            arr = arr.filter(function(e) {
                return e.id != eleId
            });
    
            // 删除li后，将arr覆盖localStorage
            let json = JSON.stringify(arr);
            localStorage.setItem(key, json);
        }

    }
        
     
     
     
  
    



   