class Folder {
    constructor(folderName, folderPath, folderArr, fileArr) {
        this.folderName = folderName;
        this.folderPath = folderPath;
        this.fileArr = fileArr;
        this.folderArr = folderArr;
    }
}

var Books = new Folder ('Books', 'Documents/Books/', [], [])

var other = new Folder ('other', 'Documents/Papers/other/', [], ['paperName.docx', 'paperName.pdf', '中国计算机学会推荐国际学术会议和期刊目录- 2022.pdf', '期刊_文献.docx', '期刊_文献.pdf'])

var over = new Folder ('over', 'Documents/Papers/over/', [], ['手眼标定_23_08_06_线激光器的手眼标定方法.pdf', '手眼标定_23_10_07_⭐基于标准球的机器人手眼标定方法改进研究_林玉莹.pdf', '手眼标定_23_10_09_⭐机器人激光检测手眼标定误差分析及优化_刘建春.pdf', '手眼标定_23_11_07_基于3D标定块的机器人与3D相机手眼标定研究_王连庆.pdf', '手眼标定_23_11_07_正交约束下的机器人线结构光手眼标定_陈新禹.pdf', '手眼标定_23_11_07_面向物料抓取机器人的新型手眼标定方法_张庆新.pdf', '点云处理_23_11_08_PointNet_Deep_Learning_on_Point_Sets_for_3D_Classification_and_Segmentation.pdf', '点云处理_23_11_22_CVPR_2023_PointNN_Starting_From_Non-Parametric_Networks_for_3D_Point_Cloud_Analysis_CVPR_2023_paper.pdf', '点云处理_23_11_23_ECCV_2020_PointContrast_Unsupervised_Pre-training_for_3D_Point_Cloud_Understanding.pdf', '点云处理_23_11_24_CVPR_2020_GraphTER_Unsupervised_Learning_of_Graph_Transformation_Equivariant_Representations_via_Auto-Encoding_CVPR_2020_paper.pdf', '点云处理_23_12_05_CVPR_2022_CrossPoint_Self-Supervised_Cross-Modal_Contrastive_Learning_for_3D_Point_Cloud_Understanding.pdf', '综合论文_23_07_04_基于3D机器视觉的工业机器人跟踪涂胶系统_陈琳.pdf', '综合论文_23_07_04_基于线激光的水轮机机器人测...标定与焊点加工区域特征提取_吉鹏晖.pdf'])

var Paper_en = new Folder ('Paper_en', 'Documents/Papers/Paper_en/', [], ['1612.00593.pdf', 'A_Path_Planning_Algorithm_of_Spray_Robot_based_on_3D_Point_Cloud.pdf', 'Fast_Object_Segmentation_Pipeline_for_Point_Clouds_Using_Robot_Operating_System.pdf', 'PointSIFT_A_SIFT_like_Network_Module_for_3D_Point_Cloud_Semantic_Segmentation.pdf', 'Recognition_and_Pose_Estimation_of_Auto_Parts_for_an_Autonomous_Spray_Painting_Robot.pdf', 's00371-021-02336-7.pdf', 'TCP_calibration.pdf', 'TSAI_A_versatile_camera_calibration_technique_for_high-accuracy_3D_machine_vision_metrology_using_off-the-shelf_TV_cameras_and_lenses.pdf'])

var 粗度手眼标定 = new Folder ('粗度手眼标定', 'Documents/Papers/reading/粗度手眼标定/', [], ['一种改进的机器人视觉点云手眼标定方法_刘明贺.pdf', '基于差分进化算法的手眼标定方法_金轲.pdf', '手眼标定0.15-基于标准圆柱的线激光轮廓扫描机器人手眼标定方法.pdf', '木板抓取机器人手眼标定方法_徐呈艺.pdf', '机器人手眼标定及其精度分析的研究_张洪瑶.pdf', '标定姿态自动生成的手眼标定方法_林敏捷.pdf', '线激光三维测量系统标定方法研究_于加慧.pdf', '难_看不懂_一种结合_TCP_标定的深度相机手眼标定方法.pdf', '面向工业应用的机器人手眼标定与物体定位_程玉立.pdf'])

var reading = new Folder ('reading', 'Documents/Papers/reading/', [粗度手眼标定], ['CVPR_2018_Muralikrishnan_Tags2Parts_Discovering_Semantic_CVPR_2018_paper.pdf', 'CVPR_2020_AdaCoSeg_Adaptive_Shape_Co-Segmentation_With_Group_Consistency_Loss_CVPR_2020_paper.pdf', 'CVPR_2022_RIM-Net_Recursive_Implicit_Fields_for_Unsupervised_Learning_of_Hierarchical_Shape_CVPR_2022_paper.pdf', 'CVPR_2023_GrowSP_Unsupervised_Semantic_Segmentation_of_3D_Point_Clouds_CVPR_2023_paper.pdf', 'CVPR_2023_Less_Is_More_Reducing_Task_and_Model_Complexity_for_3D_CVPR_2023_paper.pdf', 'CVPR_2023_PartManip_Learning_Cross-Category_Generalizable_Part_Manipulation_Policy_From_Point_Cloud_CVPR_2023_paper.pdf', 'CVPR_2023_PartSLIP_Low-Shot_Part_Segmentation_for_3D_Point_Clouds_via_Pretrained_CVPR_2023_paper.pdf', 'ECCV_2020_Label_Efficient_Learning_on_Point_Clouds.pdf', 'ICCV_2019_BAE-NET_Branched_Autoencoder_for_Shape_Co-Segmentation.pdf', 'ICCV_2019_Unsupervised_Multi-Task_Feature_Learning_on_Point_Clouds.pdf', 'ICCV_2023_PointDC_Unsupervised_Semantic_Segmentation_of_3D_Point_Clouds_via_Cross-Modal_paper.pdf', 'ICRA_2023_Mask3D_Mask_Transformer_for_3D_Semantic_Instance_Segmentation.pdf', 'Non2_2023_Self_Supervised_Boundary_Point_Prediction_Task_for_Point_Cloud_Domain_Adaptation.pdf', 'Non3_2023_Unsupervised_contrastive_learning_with_simple_transformation_for_3D.pdf', 'None_2022_UNSUPERVISED_SEGMENTATION_OF_INDOOR_3D_POINT_CLOUD.pdf', 'PointNet++_Deep_Hierarchical_Feature_Learning_on.pdf', 'Segment_Anything.pdf', 'Top1_2020_Deep_Unsupervised_Learning_of_3D_Point_Clouds_via_Graph_Topology_Inference_and_Filtering.pdf', 'TOP1_2022_SimIPU_Simple_2D_Image_and_3D_Point_Cloud_Unsupervised_Pretraining_for_SpatialAware_Visual_Representations.pdf', 'Top1_2023_PointGLR_Unsupervised_Structural_Representation_Learning_of_3D_Point_Clouds.pdf', '基于多信息深度学习的3D点云语义分割_刘友群.pdf', '点云处理_三维点云场景语义分割的关键技术研究_李梦甜.pdf', '点云处理_基于图卷积神经网络的3D点云分割算法研究_张千.pdf', '点云处理_基于注意力机制的3D点云分类和语义分割算法研究_宋文赞.pdf'])

var review = new Folder ('review', 'Documents/Papers/review/', [], ['21_top1_Deep Learning for 3D Point Clouds A Survey - 副本.pdf', '21_top1_Deep Learning for 3D Point Clouds A Survey.pdf', '22_top1_Comprehensive_Review_of_Deep_Learning-Based_3D_Point_Cloud_Completion_Processing_and_Analysis.pdf', '23_top1_Unsupervised_Point_Cloud_Representation_Learning_With_Deep_Neural_Networks_A_Survey.pdf', '23_top1_Unsupervised_Point_Cloud_Representation_Learning_With_Deep_Neural_Networks_A_Survey_译本.pdf', 'A_Brief_Survey_on_3D_Semantic_Segmentation_of_Lidar_Point_Cloud_with_Deep_Learning.pdf', '基于深度学习的3D点云补全算法综述_魏青.pdf', '基于深度学习的3维点云处理综述_李娇娇.pdf', '基于深度学习的三维点云处理方法研究进展_吴一全.pdf'])

var Papers = new Folder ('Papers', 'Documents/Papers/', [other, over, Paper_en, reading, review], ['Hou_Exploring_Data-Efficient_3D_Scene_Understanding_With_Contrastive_Scene_Contexts_CVPR_2021_paper.pdf', '手眼标定_改进粒子群优化算法及应用_吴浩然.pdf', '手眼标定_钛学术_期刊_简便高精度的机器人手眼视觉标定方法.pdf', '点云处理_基于凹凸性与密度引导点云分割的高炉炉料粒度检测_何瑞清.pdf', '点云处理_基于点云数据的隧道中轴线自动提取方法研究_李兵.pdf', '点云处理_大型工件部分点云与整体点云的配准方法_范林林.pdf', '综合论文_基于视觉的机器人自动化涂胶质量检测技术研究_张奇.pdf'])

var Temp = new Folder ('Temp', 'Documents/Temp/', [], ['11月学习汇报总结.pptx', '付凌坤_硕士学位论文开题报告及论文工作计划书.docx', '付凌坤_硕士学位论文开题报告及论文工作计划书.pdf', '开题d-附件2.硕士学位论文开题报告.doc', '李强-2272122-开题.pptx', '李强-2272122-开题报告(1).pdf', '项目可行性研究报告 - 基于3D 视觉的机器人工艺轨迹在线生成平台.doc'])

var tempDocuments = new Folder ('tempDocuments', 'Documents/tempDocuments/', [], ['向量叉乘.txt'])

var Util_py = new Folder ('Util_py', 'Documents/Util_py/', [], ['readDocuments.py', 'test.py'])

var Documents = new Folder ('Documents', 'Documents/', [Books, Papers, Temp, tempDocuments, Util_py], ['LMI和海康相机对比.docx', 'LMI和海康相机对比.pdf', '文献阅读-实验方法.docx', '文献阅读-实验方法.pdf', '方法尝试-附带思考过程.docx', '方法尝试-附带思考过程.pdf', '每日安排总结.docx', '每日安排总结.pdf'])

