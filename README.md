# 1112-2N-wp2-demo-207410647

git config --global user.email "ruby19991017@gmail.com"

git config --global user.name "xiinn7"

git log --pretty=format:"%h%x09%an%x09%ad%x09%s" --after="2023-3-30"

```
cd9a1ca xiinn7  Tue May 16 19:06:35 2023 +0800  W13-P1: investigate jwt token using jwt.io
```

### W13-P2: Get all menu data from menu_47 (no RLS), and from menu2_47 (RLS enabled)

#### Get all menu from menu_47 (RLS not enabled)

![w13-p2-1.png](https://wulpvnyfrkevttsnpoeg.supabase.co/storage/v1/object/public/demo-47/md_img/w13-p2-1.png)

#### Fail to get all menu from menu2_47 (RLS enabled)

![w13-p2-2.png](https://wulpvnyfrkevttsnpoeg.supabase.co/storage/v1/object/public/demo-47/md_img/w13-p2-2.png)

#### to get all menu from menu2_47 (RLS enabled) by providing service_role token

![w13-p2-3.png](https://wulpvnyfrkevttsnpoeg.supabase.co/storage/v1/object/public/demo-47/md_img/w13-p2-3.png?t=2023-05-16T12%3A07%3A07.350Z)

```
cc76268 xiinn7  Tue May 16 20:07:50 2023 +0800  W13-P2: Get all menu data from menu_47 (no RLS), and from menu2_47 (RLS enabled)
```

### W13-P3: Get all category=breakfast data from menu_47 (no RLS), and from menu2_47 (RLS enabled)

#### Get all category=breakfast data from menu_47 (RLS not enabled)

![w13-p3-1.png](https://wulpvnyfrkevttsnpoeg.supabase.co/storage/v1/object/public/demo-47/md_img/w13-p3-1.png)

#### get all category=breakfast data from menu2_47 (RLS enabled) by providing service_role token

![w13-p3-2.png](https://wulpvnyfrkevttsnpoeg.supabase.co/storage/v1/object/public/demo-47/md_img/w13-p3-2.png?t=2023-05-16T12%3A30%3A10.212Z)

```
7c35934 xiinn7  Tue May 16 20:30:40 2023 +0800  W13-P3: Get all category=breakfast data from menu_47 (no RLS), and from menu2_47 (RLS enabled)
```

### W13-P4: Create a data with category=breakfast, save into menu_47 (no RLS), and from menu2_47 (RLS enabled)

#### Create a data with category=breakfast, save into menu_47 (RLS not enabled)

![w13-p4-1.png](https://wulpvnyfrkevttsnpoeg.supabase.co/storage/v1/object/public/demo-47/md_img/w13-p4-1.png)

![w13-p4-2.png](https://wulpvnyfrkevttsnpoeg.supabase.co/storage/v1/object/public/demo-47/md_img/w13-p4-2.png)

#### Create a data with category=breakfast, save into menu2_47 (RLS enabled) by providing service_role token

![w13-p4-3.png](https://wulpvnyfrkevttsnpoeg.supabase.co/storage/v1/object/public/demo-47/md_img/w13-p4-3.png)

![w13-p4-4.png](https://wulpvnyfrkevttsnpoeg.supabase.co/storage/v1/object/public/demo-47/md_img/w13-p4-4.png)
